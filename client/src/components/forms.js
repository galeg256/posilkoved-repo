import React from 'react'

export default class Forms extends React.Component {
  constructor() {
    super()
    this.state = {
      post: '',
      declarant: '',
      passportSeries: '',
      passportNumber: '',
      passportGiveDate: '',
      passportWhoGive: '',
      addressIndex: '',
      addressRegion: '',
      addressLocation: '',
      firmName: '',
      firmCountry: '',
      firmAddress: '',
      transCost: '',
      productInfo: [
        {
          codeTNVD: '',
          stakeTP: '',
          productName: '',
          productTarget: '',
          productDescription: '',
          сount: '',
          spaceCount: '',
          countKg: '',
          invoiceCost: '',
          invoiceCostSELECT: '',
          grossWeight: '',
          netWeight: ''
        }
      ],
      consigmentNumber: '',
      notifyNumber: '',
      openAct: '',
      invoiceCount: '',
      additionalDoc: [
        {
          document: ''
        }
      ],
    }

    this.handlerChangeInfo = this.handlerChangeInfo.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.addAdditionalDoc = this.addAdditionalDoc.bind(this)
    this.saveDocument = this.saveDocument.bind(this)
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

  // handlerChangeInfoArr(evt) { //Array-field-index // productInfo-productName-0
  //   const dataName = evt.target.name.split('-')
    
  //   // console.log(dataName)

  //   this.setState( (state) => {
  //     // const cloneProductInfo = Object.assign([], state.productInfo)
  //     // cloneProductInfo[`${dataName[2]}`][`${dataName[1]}`] = evt.target.value
  //     // return {productInfo: cloneProductInfo}

  //     if (dataName[0] === 'productInfo') {
  //       const cloneProductInfo = Object.assign([], state.productInfo)
  //       cloneProductInfo[`${dataName[2]}`][`${dataName[1]}`] = evt.target.value
  //       return {productInfo: cloneProductInfo}
  //     } else if (dataName[0] === 'additionalDoc') {
  //       const cloneAdditionalDoc = Object.assign([], state.additionalDoc)
  //       cloneAdditionalDoc[`${dataName[2]}`][`${dataName[1]}`] = evt.target.value
  //       return {additionalDoc: cloneAdditionalDoc}
  //     }
  //   })
  // }

  addProduct() {
    this.setState( (state) => {
      const cloneProductInfo = Object.assign([], state.productInfo)
      const prodInfoItem = {
        codeTNVD: '',
        stakeTP: '',
        productName: '',
        productTarget: '',
        productDescription: '',
        сount: '',
        spaceCount: '',
        countKg: '',
        invoiceCost: '',
        invoiceCostSELECT: '',
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
    console.log(this.state)
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
                    Ставка таможженной пошлины
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
              <select className='select-lg'>
                <option>

                </option>
              </select>
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
              <select className='select-sm'>
                <option>

                </option>
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

    return (
      <div className='forms'>
        <div className='forms__top'>
          Заказ до {this.props.orderType} €
        </div>
        <div className='forms__wrap'>

          <div className='forms__post container-sm'>
            <span className='span-sm'>
              Укажите пост
            </span>
            <select className='post__list select-lg'>
              <option>

              </option>
            </select>
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

          <div className='forms__reg-adr container-lg'>
            <div className='container-title'>
              Адрес регистрации
            </div>

            <div className='container-wrap'>

              <div className='container-sm'>
                <span className='span-sm'>
                  Индекс
                </span>
                <input className='input-lg' value={state.addressIndex} name='addressIndex' onChange={this.handlerChangeInfo} />
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Регион
                </span>
                <select className='reg-adr__list select-lg'>
                  <option>

                  </option>
                </select>
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Улица, дом, квартира (офис)
                </span>
                <textarea className='forms-ta' value={state.addressLocation} name='addressLocation' onChange={this.handlerChangeInfo} />
              </div>

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
            <select className='select-sm'>
              <option>

              </option>
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