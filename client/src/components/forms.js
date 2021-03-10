import React from 'react'

export default class Forms extends React.Component {
  render() {
    return (
      <div className='forms'>
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
            <textarea className='forms-ta' />
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
                <input className='input-sm-frst'/>
                <input className='input-sm'/>
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Дата выдачи
                </span>
                <input className='input-sm-one' />
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Кем выдан
                </span>
                <textarea className='forms-ta' />
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
                <input className='input-lg' />
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
                <textarea className='forms-ta' />
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
                <textarea className='forms-ta' />
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Страна
                </span>
                <input className='input-lg' />
              </div>

              <div className='container-sm'>
                <span className='span-lg'>
                  Адрес фирмы
                  <br />
                  <span className='annotation'>
                    как в инвойсе
                  </span>
                </span>
                <textarea className='forms-ta' />
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
            <input className='input-sm-frst' />
            <select className='select-sm'>
              <option>

              </option>
            </select>
          </div>

          <div className='forms__product-info container-lg'>
            <div className='container-title'>
              Сведения о товаре 1
            </div>

            <div className='container-wrap'>

              <div className='container-sm'>
                <span className='span-sm'>
                  Наименование товара
                </span>
                <textarea className='forms-ta' />
              </div>

              <div className='container-sm'>
                <span className='span-lg'>
                  Назначение товара
                  <br />
                  <span className='annotation'>
                    необязательно для заполнения
                  </span>
                </span>
                <textarea className='forms-ta' />
              </div>

              <div className='container-sm'>
                <span className='span-lg'>
                  Характеристики товара
                  <br />
                  <span className='annotation'>
                    необязательно для заполнения
                  </span>
                </span>
                <textarea className='forms-ta' />
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
                <textarea className='forms-ta' />
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Количество в килограммах
                </span>
                <input className='input-lg'/>
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Фактурная стоимость
                </span>
                <input className='input-sm-frst' />
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
                  <input className='input-sm-one' />
                </div>
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Вес нетто
                </span>
                <div className='input-container'>
                  <input className='input-sm-one' />
                </div>
              </div>

            </div>
          </div>

          <div className='forms__add-propduct container-sm'>
            <button className='add-product__btn-add'>
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
                <textarea className='forms-ta'/>
              </div>

              <div className='container-sm'>
                <span className='span-sm'>
                  Номер уведомления таможни
                </span>
                <input className='input-lg' />
              </div>

              <div className='container-sm'>
                <span className='span-lg'>
                  Номер уведомления таможни
                  <br />
                  <span className='annotation'>
                    номер и дата
                  </span>
                </span>
                <input className='input-lg' />
              </div>

              <div className='container-sm'>
                <span className='span-lg'>
                  Инвойс-счёт
                  <br />
                  <span className='annotation'>
                    номер и дата
                  </span>
                </span>
                <input className='input-lg' />
              </div>

              <div className='container-sm'>
                <span className='span-lg'>
                  Дополнительные документы
                  <br />
                  <span className='annotation'>
                    необязательно для заполнения
                  </span>
                </span>
                <textarea className='forms-ta' />
              </div>

              <div className='container-sm'>
                <button className='more-info__btn-add'>
                  Добавить дополнительный документ
                </button>
              </div>

            </div>
          </div>

          <div className='forms__save'>
            <button className='save__btn-save'>
              Сохранить документ
            </button>
          </div>
        </div>
      </div>
    )
  }
}