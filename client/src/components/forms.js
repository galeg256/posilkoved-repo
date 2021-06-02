import React from 'react'
import {saveAs} from 'file-saver'

var timerIdAddress
var timerIdPost

export default class Forms extends React.Component {
  constructor() {
    super()
    this.state = {
      post: '', 
      postList: [], 
      isPostChoosen: false,
      postFull: '', //data
      declarant: '', //data
      passportSeries: '', //data
      passportNumber: '', //data
      passportGiveDate: '', //data
      passportWhoGive: '', //data
      address: '', 
      addressList: [], 
      isAddressChoosen: false, 
      addressFull: '', //data
      firmName: '', //data
      firmCountry: '', //data
      firmAddress: '', //data
      transCost: '', //data
      transCostVal: 'none',
      productInfo: [ //data
        {
          codeTNVD: '',
          stakeTP: '',
          productName: '',
          productTarget: '',
          productDescription: '',
          countUM: '',
          spaceCount: '',
          countKg: '',
          invoiceCost: '',
          invoiceCostVal: 'none',
          grossWeight: '',
          netWeight: ''
        }
      ],
      consigmentNumber: '', //data
      notifyNumber: '', //data
      openAct: '', //data
      invoiceCount: '', //data
      additionalDoc: [ //data
        {
          document: ''
        }
      ],
    }

    this.handlerChangeInfo = this.handlerChangeInfo.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.addAdditionalDoc = this.addAdditionalDoc.bind(this)
    this.saveDocument = this.saveDocument.bind(this)

    this.handlerChangeSelect = this.handlerChangeSelect.bind(this)
    this.handlerClickSelect = this.handlerClickSelect.bind(this)
    this.fetchSelectAPI = this.fetchSelectAPI.bind(this)
  }

  handlerChangeInfo(evt) {
    let dataName = evt.target.name

    if (dataName.split('-').length === 1) {
      this.setState({[`${dataName}`]: evt.target.value})
    } else {
      dataName = dataName.split('-')
      this.setState( (state) => {
        if (dataName[0] === 'productInfo') {
          const cloneProductInfo = Object.assign([], state.productInfo)
          cloneProductInfo[`${dataName[2]}`][`${dataName[1]}`] = evt.target.value
          return {productInfo: cloneProductInfo}
        } else if (dataName[0] === 'additionalDoc') {
          const cloneAdditionalDoc = Object.assign([], state.additionalDoc)
          cloneAdditionalDoc[`${dataName[2]}`][`${dataName[1]}`] = evt.target.value
          return {additionalDoc: cloneAdditionalDoc}
        }
      })
    }

  }

  addProduct() {
    this.setState( (state) => {
      const cloneProductInfo = Object.assign([], state.productInfo)
      const prodInfoItem = {
        codeTNVD: '',
        stakeTP: '',
        productName: '',
        productTarget: '',
        productDescription: '',
        countUM: '',
        spaceCount: '',
        countKg: '',
        invoiceCost: '',
        invoiceCostVal: 'none',
        grossWeight: '',
        netWeight: ''
      }
      
      cloneProductInfo.push(prodInfoItem)

      return {productInfo: cloneProductInfo}
    })
  }

  addAdditionalDoc() {
    this.setState( (state) => {
      const cloneAdditionalDoc = Object.assign([], state.additionalDoc)
      const additionalDocItem = {
        document: ''
      }
      cloneAdditionalDoc.push(additionalDocItem)
      return {additionalDoc: cloneAdditionalDoc}
    })
  }

  saveDocument() {
    //console.log(this.state)
    //start razcomment here \>
    const state = this.state

    const data = {
      postFull: state.postFull, 
      declarant: state.declarant,
      passportSeries: state.passportSeries,
      passportNumber: state.passportNumber,
      passportGiveDate: state.passportGiveDate,
      passportWhoGive: state.passportWhoGive,
      addressFull: state.addressFull,
      firmName: state.firmName,
      firmCountry: state.firmCountry,
      firmAddress: state.firmAddress,
      transCost: state.transCost,
      transCostVal: state.transCostVal,
      productInfo: state.productInfo, //arr
      consigmentNumber: state.consigmentNumber,
      notifyNumber: state.notifyNumber,
      openAct: state.openAct,
      invoiceCount: state.invoiceCount,
      additionalDoc: state.additionalDoc //arr
    }

    // const data = {
    //   // postFull: 'Пальниковский таможенный пост',
    //   // postFull.data.code: '10411080',

    //   postFull: {
    //     unrestricted_value: 'Пальниковский таможенный пост',
    //     data: {code: '10411080'}
    //   },

    //   declarant: 'Галкин Егор Геннадьевич',
    //   passportSeries: '5711',
    //   passportNumber: '123654',
    //   passportGiveDate: '29.09.2017',
    //   passportWhoGive: 'отделом УФМС России по пермскому краю в дзержинском р-не г.Перми',
    //   addressFull: {
    //     unrestricted_value: '614016, Пермский край, г Пермь, ул Елькина, д 49, кв 44'
    //   },
    //   firmName: 'Shenzen Legend Beauty Equipment CO., LTD.',
    //   firmCountry: 'Китай',
    //   firmAddress: 'CN, Guandong, Shenzhen, Room 1207, Deqinchuang building, NO. 28, Bulong Road, Buji st., Longgang district',
    //   transCost: '100',
    //   transCostVal: 'EUR',
    //   // productInfo: [], //arr,
    //   productInfo: [
    //     {
    //       codeTNVD: '', //only for form1000
    //       stakeTP: '', //only for form1000
    //       productName: 'Moloko',
    //       productTarget: 'V Rot',
    //       productDescription: 'beloe',
    //       countUM: '10 кг',
    //       spaceCount: '5',
    //       countKg: '10',
    //       invoiceCost: '25,5',
    //       invoiceCostVal: 'EUR',
    //       grossWeight: '1',
    //       netWeight: '0,8'
    //     },
    //     {
    //       r: ''
    //     }
    //   ],
    //   consigmentNumber: 'EA176279747CN',
    //   notifyNumber: '10221030/110819/0004335F',
    //   openAct: '16.08.2019',
    //   invoiceCount: 'LG148120190725TC',
    //   // additionalDoc: [], //arr
    //   additionalDoc: [
    //     { document: 'Какой-то доп. документ №1' },
    //     { document: 'Какой-то доп. документ №2' },
    //     { document: 'Какой-то доп. документ №3' },
    //   ],
    // } 

    // console.log(data)

    async function fetchCreatePDF() {
      const res = await fetch('/api/order/create-doc', {
        method: 'post',
        headers: {'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token')},
        body: JSON.stringify({ //временный выкрутас с перечислением свойств state
          // "data": state,
          "data": data,
          "type": this.props.orderType})
      })
      // const result = await res.json()
      if (res.ok) {
        const doc = await fetch('/api/order/get-doc', {
          method: 'get',
          headers: {'Content-Type': 'application/pdf', 'Authorization': localStorage.getItem('token')}
        })

        const document = await doc.blob()

        const pdfBlob = new Blob([document], {type: 'application/pdf'})
        saveAs(pdfBlob, 'newPdf.pdf')
        //говнокод
      } else {
        console.log('createPDF save упал!')
      }
    }

    fetchCreatePDF.call(this)
  }

  handlerChangeSelect(evt) {
    switch(evt.target.name) {
      case 'address': 
        this.setState({
          address: evt.target.value,
          isAddressChoosen: false
        })
        break
      case 'post':
        this.setState({
          post: evt.target.value,
          isPostChoosen: false
        })
        break
      default: break
    }
  } 

  handlerClickSelect(evt) {
    switch(evt.target.getAttribute('data-name')) {
      case 'address': 
        this.setState({
          address: evt.target.textContent,
          addressList: [],
          isAddressChoosen: true,
          addressFull: this.state.addressFull[evt.target.getAttribute('data-id')]
        })
        break
      case 'post':
        this.setState({
          post: evt.target.textContent,
          postList: [],
          isPostChoosen: true,
          postFull: this.state.postFull[evt.target.getAttribute('data-id')]
        })
        break
      default: break
    }
  } 

  fetchSelectAPI(selectName) {
    const state = this.state
    var url = selectName === 'address' 
      ? "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address"
      : "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fts_unit"

    var token = "19daea13967f8cdef8b5daff3c0e45639e859762"

    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({
          query: selectName === 'address' ? state.address : state.post,
          count: 10 //max записей: count
        }) 
    }

    fetch(url, options)
    .then(response => response.json())
    .then(result => {
      const tempArr = []
      for (let suggestion of result.suggestions) {
        tempArr.push(selectName === 'address' ? suggestion.value : suggestion.unrestricted_value)
      }

      switch(selectName) {
        case 'address': 
          this.setState({
            addressList: tempArr,
            addressFull: result.suggestions
          })
          break
        case 'post':
          this.setState({
            postList: tempArr,
            postFull: result.suggestions
          })
          break
        default: break
      }
    })
    .catch(error => console.log("error", error)); //нет проверки на ошибки!
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.address !== this.state.address) && (this.state.isAddressChoosen === false) ) {
      clearTimeout(timerIdAddress)
      timerIdAddress = setTimeout(() => this.fetchSelectAPI('address'), 500); 
    } else if ((prevState.post !== this.state.post) && (this.state.isPostChoosen === false) ) {
      clearTimeout(timerIdPost)
      timerIdPost = setTimeout(() => this.fetchSelectAPI('post'), 500); 
    }
  }

  render() {
    const state = this.state
    const productInfos = []
    const additionalDocs = []

    for (let i=0; i<this.state.productInfo.length; i++) {
      productInfos.push(
        <div className='forms__product-info container-lg' key={i}>   
          <div className='container-title'>
            Сведения о товаре {i + 1}
          </div>

          <div className='container-wrap'>
            
            {this.props.orderType === '1000' ? 
              <div>
                <div className='container-sm'>
                  <span className='span-lg'>
                    Код по ТН ВЭД
                    <br />
                    <span className='annotation'>
                      выбрать код
                    </span>
                  </span>
                  <textarea className='forms-ta' value={state.productInfo[i].codeTNVD} name={`productInfo-codeTNVD-${i}`} onChange={this.handlerChangeInfo}/>
                </div>

                <div className='container-sm'>
                  <span className='span-lg'>
                    Ставка таможенной пошлины
                    <br />
                    <span className='annotation'>
                      без знака %
                    </span>
                  </span>
                  <textarea className='forms-ta' value={state.productInfo[i].stakeTP} name={`productInfo-stakeTP-${i}`} onChange={this.handlerChangeInfo}/>
                </div>
              </div>
              : null 
            }

            <div className='container-sm'>
              <span className='span-sm'>
                Наименование товара
              </span>
              <textarea className='forms-ta' value={state.productInfo[i].productName} name={`productInfo-productName-${i}`} onChange={this.handlerChangeInfo}/>
            </div>

            <div className='container-sm'>
              <span className='span-lg'>
                Назначение товара
                <br />
                <span className='annotation'>
                  необязательно для заполнения
                </span>
              </span>
              <textarea className='forms-ta' value={state.productInfo[i].productTarget} name={`productInfo-productTarget-${i}`} onChange={this.handlerChangeInfo}/>
            </div>

            <div className='container-sm'>
              <span className='span-lg'>
                Характеристики товара
                <br />
                <span className='annotation'>
                  необязательно для заполнения
                </span>
              </span>
              <textarea className='forms-ta' value={state.productInfo[i].productDescription} name={`productInfo-productDescription-${i}`} onChange={this.handlerChangeInfo}/>
            </div>

            <div className='container-sm'>
              <span className='span-sm'>
                Количество, ед. изм.
              </span>
              <input className='input-lg' value={state.productInfo[i].countUM} name={`productInfo-countUM-${i}`} onChange={this.handlerChangeInfo}/>
            </div>

            <div className='container-sm'>
              <span className='span-lg'>
                Количество грузовых мест
                <br />
                <span className='annotation'>
                  мешок, коробка, пакет и т.д.
                </span>
              </span>
              <textarea className='forms-ta' value={state.productInfo[i].spaceCount} name={`productInfo-spaceCount-${i}`} onChange={this.handlerChangeInfo}/>
            </div>

            <div className='container-sm'>
              <span className='span-sm'>
                Количество в килограммах
              </span>
              <input className='input-lg' value={state.productInfo[i].countKg} name={`productInfo-countKg-${i}`} onChange={this.handlerChangeInfo}/>
            </div>

            <div className='container-sm'>
              <span className='span-sm'>
                Фактурная стоимость
              </span>
              <input className='input-sm-frst' value={state.productInfo[i].invoiceCost} name={`productInfo-invoiceCost-${i}`} onChange={this.handlerChangeInfo}/>
              <select className='select-sm' value={state.productInfo[i].invoiceCostVal} name={`productInfo-invoiceCostVal-${i}`} onChange={this.handlerChangeInfo} > 
                <option value='none' style={{color: '#999'}}>--Валюта--</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='CNY'>CNY</option>
                <option value='RUB'>RUB</option>
              </select>
            </div>

            <div className='container-sm'>
              <span className='span-sm'>
                Вес брутто
              </span>
              <div className='input-container'>
                <input className='input-sm-one' value={state.productInfo[i].grossWeight} name={`productInfo-grossWeight-${i}`} onChange={this.handlerChangeInfo}/>
              </div>
            </div>

            <div className='container-sm'>
              <span className='span-sm'>
                Вес нетто
              </span>
              <div className='input-container'>
                <input className='input-sm-one' value={state.productInfo[i].netWeight} name={`productInfo-netWeight-${i}`} onChange={this.handlerChangeInfo}/>
              </div>
            </div>

          </div>
        </div>
      )
    }

    for (let i=0; i<this.state.additionalDoc.length; i++) {
      additionalDocs.push(
        <div className='container-sm' key={i}>
          <span className='span-lg'>
            Дополнительные документы
            <br />
            <span className='annotation'>
              необязательно для заполнения
            </span>
          </span>
          <textarea className='forms-ta' value={state.additionalDoc[i].document} name={`additionalDoc-document-${i}`} onChange={this.handlerChangeInfo}/>
        </div>
      )
    }

    const addressOptions = state.addressList.map( (value, index) => {
      return <div
        className='address-item'
        key={index}
        data-name='address'
        onClick={this.handlerClickSelect}
        data-id={index}
      >
        {value}
      </div>
    })

    const postOptions = state.postList.map( (value, index) => {
      return <div
        className='post-item'
        key={index}
        data-name='post'
        onClick={this.handlerClickSelect}
        data-id={index}
      >
        {value}
      </div>
    })

    return (
      <div className='forms'>
        <div className='forms__top'>
          Заказ до {this.props.orderType} €
        </div>
        <div className='forms__wrap'>

          <div className='forms__post'>
            <div className='container-title'>
              Укажите пост
            </div>
            <input className='input-select' value={state.post} name='post' onChange={this.handlerChangeSelect} />
            <div className={`post-list ${state.postList.length ? 'pl-fill' : 'pl-empty'}`} >
              {postOptions}  
            </div>
          </div>

          <div className='forms__fullname container-sm'>
            <span className='span-lg'>
              Декларант
              <br />
              <span className='annotation'>
                лицо, в адрес которого пришла посылка
              </span>
            </span>
            <textarea className='forms-ta' value={state.declarant} name='declarant' onChange={this.handlerChangeInfo} />
          </div>

          <div className='forms__passport container-lg'>
            <div className='container-title'>
              Паспортные данные
            </div>

            <div className='container-wrap'>

              <div className='container-sm'>
                <span className='span-sm'>
                  Серия и номер
                </span>
                <input className='input-sm-frst' value={state.passportSeries} name='passportSeries' onChange={this.handlerChangeInfo} />
                <input className='input-sm' value={state.passportNumber} name='passportNumber' onChange={this.handlerChangeInfo} />
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Дата выдачи
                </span>
                <input className='input-sm-one' value={state.passportGiveDate} name='passportGiveDate' onChange={this.handlerChangeInfo}/>
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Кем выдан
                </span>
                <textarea className='forms-ta' value={state.passportWhoGive} name='passportWhoGive' onChange={this.handlerChangeInfo}/>
              </div>

            </div>
          </div>

          <div className='forms__address'>
            <div className='container-title'>
              Адрес регистрации
            </div>
            <input className='input-select' value={state.address} name='address' onChange={this.handlerChangeSelect} />
            <div className={`address-list ${state.addressList.length ? 'al-fill' : 'al-empty'}`} >
              {addressOptions}  
            </div>
          </div>

          <div className='forms__sender container-lg'>
            <div className='container-title'>
              Отправитель
            </div>

            <div className='container-wrap'>

              <div className='container-sm'>
                <span className='span-lg'>
                  Наименование фирмы
                  <br />
                  <span className='annotation'>
                    как в инвойсе
                  </span>
                </span>
                <textarea className='forms-ta' value={state.firmName} name='firmName' onChange={this.handlerChangeInfo} />
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Страна
                </span>
                <input className='input-lg' value={state.firmCountry} name='firmCountry' onChange={this.handlerChangeInfo} />
              </div>

              <div className='container-sm'>
                <span className='span-lg'>
                  Адрес фирмы
                  <br />
                  <span className='annotation'>
                    как в инвойсе
                  </span>
                </span>
                <textarea className='forms-ta' value={state.firmAddress} name='firmAddress' onChange={this.handlerChangeInfo} />
              </div>

            </div>
          </div>

          <div className='forms__trans-cost container-sm'>
            <span className='span-lg'>
                Стоимость перевозки
                <br />
                <span className='annotation'>
                  при наличии
                </span>
            </span>
            <input className='input-sm-frst' value={state.transCost} name='transCost' onChange={this.handlerChangeInfo} />
            <select className='select-sm' value={state.transCostVal} name='transCostVal' onChange={this.handlerChangeInfo}> 
                <option value='none' style={{color: '#999'}}>--Валюта--</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='CNY'>CNY</option>
                <option value='RUB'>RUB</option>
              </select>
          </div>

          {productInfos}

          <div className='forms__add-propduct container-sm'>
            <button className='add-product__btn-add' onClick={this.addProduct}>
              Добавить товар
            </button>
          </div>

          <div className='forms__more-info container-lg'>
            <div className='container-title'>
              Дополнительные сведения
            </div>

            <div className='container-wrap'>

              <div className='container-sm'>
                <span className='span-lg'>
                  Номер почтовой или транспортной накладной
                </span>
                <textarea className='forms-ta' value={state.consigmentNumber} name='consigmentNumber' onChange={this.handlerChangeInfo} />
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Номер уведомления таможни
                </span>
                <input className='input-lg' value={state.notifyNumber} name='notifyNumber' onChange={this.handlerChangeInfo} />
              </div>

              <div className='container-sm'>
                <span className='span-lg'>
                  Акт вскрытия
                  <br />
                  <span className='annotation'>
                    номер и дата
                  </span>
                </span>
                <input className='input-lg' value={state.openAct} name='openAct' onChange={this.handlerChangeInfo} />
              </div>

              <div className='container-sm'>
                <span className='span-lg'>
                  Инвойс-счёт
                  <br />
                  <span className='annotation'>
                    номер и дата
                  </span>
                </span>
                <input className='input-lg' value={state.invoiceCount} name='invoiceCount' onChange={this.handlerChangeInfo}/>
              </div>

              {additionalDocs}
              
              <div className='container-sm'>
                <button className='more-info__btn-add' onClick={this.addAdditionalDoc}>
                  Добавить дополнительный документ
                </button>
              </div>

            </div>
          </div>

          <div className='forms__save'>
            <button className='save__btn-save' onClick={this.saveDocument}>
              Сохранить документ
            </button>
          </div>
        </div>
      </div>
    )
  }
}