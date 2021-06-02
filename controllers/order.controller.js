import template200 from '../documents/doc200.js'
//import pdf from 'html-pdf'
import path from 'path'
import {pdfCreate} from '../documents/pdfCreate.js'
import fetch from 'node-fetch'


const __dirname = path.resolve()
const options = { format: 'A4', orientation: 'landscape' }

async function courseCurrencies() {
    try {
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        if(response.status !== 200) throw new Error()
        const result = await response.json()
        const courseObj = {
            USD: result.Valute.USD.Value,
            EUR: result.Valute.EUR.Value,
            CNY: result.Valute.CNY.Value * 10
        }

        return courseObj

      } catch (error) {
        console.log(error);
      }
}

//внешнаяя обработка объекта data
async function dataProcessing(data) {
    //getDate
    const date = new Date()
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    let year = date.getFullYear()

    data.pointedDate = `${day}.${month}.${year}`

    year %= 100
    year = year < 10 ? '0' + year : year
    data.date = `${day}${month}${year}`
    
    for (let i=0; i<data.productInfo.length; i++) {
        data.productInfo[i].position = i + 1
        data.productInfo[i].country = data.firmCountry
    }
    
    data.currencies = await courseCurrencies()
    // data.test = <div>10</div>
    // data.condition = data.test < 10
    
    return data
}

export const createPDF = async (req, res) => {
    const type = req.body.type
    // const data = req.body.data

    //код писать сюда (внешняя обработка)
    const data = await dataProcessing(req.body.data)
    //
    const doPDF = await pdfCreate(data)

    if (doPDF) res.json("good")
    else res.status(403).send("bad")

    // pdf.create(template200(data), options).toFile('result.pdf', (err) => {
    //     if (err) res.status(403).send("bad")
    //     else {
    //         res.json("good")
    //     }
    // })
    //res.sendFile(`${__dirname}/result.pdf`)
}

export const getPDF = (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
}