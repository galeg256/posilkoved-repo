import template200 from '../documents/doc200.js'
import pdf from 'html-pdf'
import path from 'path'

const __dirname = path.resolve()
const options = { format: 'A4', orientation: 'landscape', type: 'pdf' }

export const createPDF = (req, res) => {
    const type = req.body.type
    const data = req.body.data

    pdf.create(template200(data), options).toFile('result.pdf', (err) => {
        if (err) res.status(403).send("bad")
        else {
            res.json("good")
        }
    })
    //res.sendFile(`${__dirname}/result.pdf`)
}

export const getPDF = (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
}