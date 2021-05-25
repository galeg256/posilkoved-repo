// export default(data) => {
//     return `
//         <div style="font-family: 'Tahoma', sans-serif; font-size: 9.5px; "> Прошу произвести таможенное оформление нижеперечисленного товара в соответствии с Решением Комиссии таможенного союза от 20.05.2010 № 263. </div>
//     `
// }

// return `
//     <!doctype html>
//     <html>
//         <head>
//             <meta charset="utf-8">
//         </head>
//         <body>
//             <div> ${data.declarant} </div>
//         </body>
//     </html>`

// ${normalize}
// ${style200}

import normalize from '../documents/normalize.js'
import style200 from '../documents/style200.js'

export default(data) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <!-- <link rel="stylesheet" href="normalize.css" type="text/css"/> -->
        <!-- <link rel="stylesheet" href="style.css" type="text/css"/> -->
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
        <title>PDF Document</title>
        <style>
          ${normalize()}
          ${style200()}
        </style>
      </head>
      <body>
        <div class="document" style="position: relative;">
    
          <!-- over blocks -->
          <!-- <div class="2blocks_over" style="position: absolute; width: 100%; height: 10px; background-color: #eee;">
    
          </div> -->
    
          <div class="document__wrap" style="position: relative;">
    
            <!-- into blocks -->
            <!-- <div class="2blocs_into" style="position: absolute; width: 100%; height: 10px; background-color: #eee;">
    
            </div> -->
    
            <table style="width: 100%; margin-bottom: 0.75px;">
              <tbody>
                <tr>
                  <td style="text-align: right;">XПальниковский таможенный постX</td>
                </tr>
              </tbody>
            </table>
      
            <table style="width: 100%; margin-bottom: 3.75px;">
              <tbody>
                <tr>
                  <td style="text-align: center;"><b>Заявление X1001010/220921X</b></td>
                </tr>
                <tr>
                  <td style="text-align: center;">
                    Прошу произвести таможенное оформление нижеперечисленного товара в соответствии с Решением Комиссии таможенного союза от 20.05.2010 № 263.
                    <br />
                    Сообщаю сведения, необходимые для таможенных целей
                  </td>
                </tr>    
              </tbody>
            </table>
            
            <table style="width: 100%; margin-bottom: 2.5px;">
              <tbody valign='top'>
                <tr>
                  <td style="width: 26.25px"><b>1. Декларант:</b></td>
                  <td style="text-transform: uppercase; width: 139px">XКорекова Мария Анатольевна 618014, Пермский край, Пермь, ул. Елькина, д.49, кв. 44, ПАСРФ №1234 123346 ВЫД. 15.04.2017 УФМС России по Пермскому краю в Осинском р-неX</td>
                  <td rowspan="8" style="padding-left: 18.75px; width: 77px;">
                    <span>9. Дополнительные сведения:</span>
                    <br />
                    <span style="text-transform: uppercase;">XНакладная ЕА176279747СNX</span>
                    <br />
                    <span style="text-transform: uppercase;">Xуведомление таможни 10221030/110819/0004335FX</span>
                    <br />
                    <span style="text-transform: uppercase;">Xакт вскрытия акт 16.08.2019X</span>
                  </td>
                </tr>
                <tr>
                  <td style="width: 26.25px"><b>2. Отправитель:</b></td>
                  <td style="text-transform: uppercase; width: 139px">XLorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi veniam soluta, quos aliquid tenetur accusantium sequi. Nobis explicabo error ipsa rerum nulla eius rem vel.X</td>
                  <!-- <td></td> -->
                </tr>
                <tr>
                  <td style="width: 26.25px"><b>3. Получатель:</b></td>
                  <td style="text-transform: uppercase; width: 139px">XКорекова Мария Анатольевна 618014, Пермский край, Пермь, ул. Елькина, д.49, кв. 44, ПАСРФ №1234 123346 ВЫД. 15.04.2017 УФМС России по Пермскому краю в Осинском р-неX</td>
                  <!-- <td></td> -->
                </tr>
                <!-- Не задаю ширину -->
                <tr>
                  <td colspan="2">
                    <span style="padding-right: 3px;"><b>4. Заявляемая таможенная процедура:</b></span>
                    <span style="text-transform: uppercase;">XИМ40X</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <span style="padding-right: 3px;"><b>5. Условия поставки:</b></span>
                    <span style="text-transform: uppercase;">XDAP ПЕРМЬX</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <span style="padding-right: 3px;"><b>6. Стоимость перевозки:</b></span>
                    <span style="text-transform: uppercase;">X100USDX</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <span style="padding-right: 3px;"><b>7. Паспорт сделки:</b></span>
                    <span style="text-transform: uppercase;">XX</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <span style="padding-right: 3px;"><b>8. Сведения о товаре:</b></span>
                    <span style="text-transform: uppercase;">XX</span>
                  </td>
                </tr>
              </tbody>
            </table>
      
            <table style="width: 100%; margin-bottom: 4px;">
              <tbody>
                <tr>
                  <td style="width: 65.375px">XКурс валюты на дату 02.09.2019X</td>
                  <td style="width: 65.375px">XДоллар США - 66.4897 за 1 USDX</td>
                  <td style="width: 65.375px">XЕвро - 73.3847 за 1 EURX</td>
                  <td style="width: 65.375px">XЮань - 93.0446 за 10 CHYX</td>
                </tr>
              </tbody>
            </table>
      
            <table class="data-table" style="margin-top: 10px;">
              <tbody>
                <!-- 2ва первых tr - это комбинированная первая строка -->
                <tr>
                  <td rowspan="2">№ товара</td>
                  <td rowspan="2">Наименование</td>
                  <td rowspan="2">Страна происхождения / назначения</td>
                  <td rowspan="2">Код по ТН ВЭД ТС</td>
                  <td colspan="3">Количество</td>
                  <td colspan="2">Вес, кг</td>
                  <td rowspan="2">Фактур. стоим., USD</td>
                  <td rowspan="2">Тамож. стоим., Руб.</td>
                  <td rowspan="2">Статист. Стоим., долл США</td>
                  <td rowspan="2">Ставка тамож. пошлины</td>
                  <td rowspan="2">Тамож. пошлина, руб.</td>
                  <td rowspan="2">НДС, руб.</td>
                  <td rowspan="2">Тамож. Сборы за тамож. Оформл., руб</td>
                </tr>

                <tr>
                  <td>Груз. мест</td>
                  <td>в осн. ед. изм. кг</td>
                  <td>в доп. ед. изм.</td>
                  <td>брутто</td>
                  <td>нетто</td>
                </tr>

                <tr>
                  <td>X1X</td>
                  <td>X ASD ASD ASD ASD ASD ASD ASD X</td>
                  <td>X3X</td>
                  <td>X4X</td>
                  <td>X5X</td>
                  <td>X6X</td>
                  <td>X7X</td>
                  <td>X8X</td>
                  <td>X9X</td>
                  <td>X10X</td>
                  <td>X11X</td>
                  <td>X12X</td>
                  <td>X13X</td>
                  <td>X14X</td>
                  <td>X15X</td>
                  <td>X16X</td>
                </tr>

                <tr>
                  <td colspan="4">Итого:</td>
                  <td>X1X</td>
                  <td>X2X</td>
                  <td>X3X</td>
                  <td>X4X</td>
                  <td>X5X</td>
                  <td>X6X</td>
                  <td>X7X</td>
                  <td>X8X</td>
                  <td>X9X</td>
                  <td>X10X</td>
                  <td>X11X</td>
                  <td>X12X</td>
                </tr>

              </tbody>
            </table>

            <!-- ver2 end -->
      
            <table class="declarant">
              <tbody>
                <tr>
                  <td style="width: 128.75px; text-align: right;">
                    <b>Декларант:</b>
                  </td>
                  <td style="padding-left: 1.5px;">
                    XКОРЕКОВА МАРИЯ АНАТОЛЬЕВНАX
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td style="padding-left: 1.5px;">XПАСПОРТ ГРАЖДАНИНА РФ СЕРИЯ 1234 №123346X</td>
                </tr>
                <tr>
                  <td></td>
                  <td style="padding-left: 1.5px;">XВЫДАН УФМС России по Пермскому краю в Осинском р-не 15.04.2017X</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </body>
    </html>
    `
}



/////////////////////////
// <!DOCTYPE html>
//     <html>
//     <head>
//       <meta charset="UTF-8">
//       <!-- <link rel="stylesheet" href="normalize.css" type="text/css"/> -->
//       <!-- <link rel="stylesheet" href="style.css" type="text/css"/> -->
//       <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
//       <title>PDF Document</title>
//       <style>
//         ${normalize()}
//         ${style200()}
//       </style>
//     </head>
//     <body>
//       <div class="document">
//         <div class="document__wrap">

//           <table style="width: 100%; margin-bottom: 0.75px;">
//             <tbody>
//               <tr>
//                 <td style="text-align: right;">XПальниковский таможенный постX</td>
//               </tr>
//             </tbody>
//           </table>
    
//           <table style="width: 100%; margin-bottom: 3.75px;">
//             <tbody>
//               <tr>
//                 <td style="text-align: center;"><b>Заявление X1001010/220921X</b></td>
//               </tr>
//               <tr>
//                 <td style="text-align: center;">
//                   Прошу произвести таможенное оформление нижеперечисленного товара в соответствии с Решением Комиссии таможенного союза от 20.05.2010 № 263.
//                   <br />
//                   Сообщаю сведения, необходимые для таможенных целей
//                 </td>
//               </tr>    
//             </tbody>
//           </table>
          
//           <table style="width: 100%; margin-bottom: 2.5px;">
//             <tbody valign='top'>
//               <tr>
//                 <td style="width: 26.25px"><b>1. Декларант:</b></td>
//                 <td style="text-transform: uppercase; width: 139px">XКорекова Мария Анатольевна 618014, Пермский край, Пермь, ул. Елькина, д.49, кв. 44, ПАСРФ №1234 123346 ВЫД. 15.04.2017 УФМС России по Пермскому краю в Осинском р-неX</td>
//                 <td rowspan="8" style="padding-left: 18.75px; width: 77px;">
//                   <span><b>9. Дополнительные сведения:</b></span>
//                   <br />
//                   <span style="text-transform: uppercase;">XНакладная ЕА176279747СNX</span>
//                   <br />
//                   <span style="text-transform: uppercase;">Xуведомление таможни 10221030/110819/0004335FX</span>
//                   <br />
//                   <span style="text-transform: uppercase;">Xакт вскрытия акт 16.08.2019X</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td style="width: 26.25px"><b>2. Отправитель:</b></td>
//                 <td style="text-transform: uppercase; width: 139px">XLorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi veniam soluta, quos aliquid tenetur accusantium sequi. Nobis explicabo error ipsa rerum nulla eius rem vel.X</td>
//                 <!-- <td></td> -->
//               </tr>
//               <tr>
//                 <td style="width: 26.25px"><b>3. Получатель:</b></td>
//                 <td style="text-transform: uppercase; width: 139px">XКорекова Мария Анатольевна 618014, Пермский край, Пермь, ул. Елькина, д.49, кв. 44, ПАСРФ №1234 123346 ВЫД. 15.04.2017 УФМС России по Пермскому краю в Осинском р-неX</td>
//                 <!-- <td></td> -->
//               </tr>
//               <!-- Не задаю ширину -->
//               <tr>
//                 <td colspan="2">
//                   <span style="padding-right: 3px;"><b>4. Заявляемая таможенная процедура:</b></span>
//                   <span style="text-transform: uppercase;">XИМ40X</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td colspan="2">
//                   <span style="padding-right: 3px;"><b>5. Условия поставки:</b></span>
//                   <span style="text-transform: uppercase;">XDAP ПЕРМЬX</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td colspan="2">
//                   <span style="padding-right: 3px;"><b>6. Стоимость перевозки:</b></span>
//                   <span style="text-transform: uppercase;">X100USDX</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td colspan="2">
//                   <span style="padding-right: 3px;"><b>7. Паспорт сделки:</b></span>
//                   <span style="text-transform: uppercase;">XX</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td colspan="2">
//                   <span style="padding-right: 3px;"><b>8. Сведения о товаре:</b></span>
//                   <span style="text-transform: uppercase;">XX</span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
    
//           <table style="width: 100%; margin-bottom: 4px;">
//             <tbody>
//               <tr>
//                 <td style="width: 65.375px">XКурс валюты на дату 02.09.2019X</td>
//                 <td style="width: 65.375px">XДоллар США - 66.4897 за 1 USDX</td>
//                 <td style="width: 65.375px">XЕвро - 73.3847 за 1 EURX</td>
//                 <td style="width: 65.375px">XЮань - 93.0446 за 10 CHYX</td>
//               </tr>
//             </tbody>
//           </table>
    
//           <!-- Сменить или убрать класс -->
//           <table class="data-table">
//             <tbody>
//               <tr style="text-align: center; font-weight: normal; height: 10.75px;" valign="top">
//                 <td style="border-bottom: 0; width: 13.25px;">
//                   <span class="data-table__sp">№ товара</span>
//                 </td> 
//                 <td style="border-bottom: 0; width: 27.5px;">
//                   <span class="data-table__sp">Наименование</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 24px;">
//                   <span class="data-table__sp">Страна происхождения / назначения</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 17.5px;">
//                   <span class="data-table__sp">
//                     Код по ТН
//                     <br/>
//                     ВЭД ТС
//                   </span>
//                 </td>
//                 <td style="width: 41.125px; border: 0;">
//                   <table style="width: 100%;">
//                     <tbody>
//                       <tr style="height: 4.25px; border: 0;">
//                         <td colspan="3" style=" border-left: 0; border-right: 0;">Количество</td>
//                       </tr>
//                       <tr style="height: 6.375px;" valign="top">
//                         <td style="border-bottom: 0; border-left: 0;">Груз. мест</td>
//                         <td style="border-bottom: 0;">
//                           в осн. ед.
//                           <br /> 
//                           изм. кг
//                         </td>
//                         <td style="border-bottom: 0;">
//                           в доп. ед.
//                           <br />
//                            изм.
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </td>
//                 <td style="border-bottom: 0; width: 29.875px;">
//                   <table style="width: 100%;">
//                     <tbody>
//                       <tr style="height: 4.125px; border: 0;">
//                         <td colspan="2" style="border: 0;">Вес, кг</td>
//                       </tr>
//                       <tr style="height: 6.375px;" valign="top">
//                         <td style="border-bottom: 0; border-left: 0;">брутто</td>
//                         <td style="border-bottom: 0;">нетто</td>
//                       </tr>
                      
//                     </tbody>
//                   </table>
//                 </td>
//                 <td style="border-bottom: 0; width: 14.5px;">
//                   <span class="data-table__sp">Фактур. стоим., USD</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 14px;">
//                   <span class="data-table__sp">Тамож. стоим., Руб.</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 16px;">
//                   <span class="data-table__sp">
//                     Статист. Стоим.,
//                     <br />
//                     долл США
//                   </span>
//                 </td>
//                 <td style="border-bottom: 0; width: 15.25px;">
//                   <span class="data-table__sp">Ставка тамож. пошлины</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 17px;">
//                   <span class="data-table__sp">
//                     Тамож.
//                     <br />
//                     пошлина,
//                     <br />
//                     руб.
//                   </span>
//                 </td>
//                 <td style="border-bottom: 0; width: 13.875px;">
//                   <span class="data-table__sp">НДС, руб.</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 17.625px;">
//                   <span class="data-table__sp">Тамож. Сборы за тамож. Оформл., руб</span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
    
//           <table class="data-table">
//             <tbody valign="top">
//               <!-- Отступы по 1px везде -->
//               <!-- Ширины подогнаны -->
//               <tr>
//                 <td class="prod-cell left" style="width: 13px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell left" style="width: 27px;">
//                   <span>Xasd asd asd asd asd asd asd asd asd asdX</span>
//                 </td>
//                 <td class="prod-cell left" style="width: 24px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell left" style="width: 17.25px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.125px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.375px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.625px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.75px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 14.25px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.875px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.125px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 16.875px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.75px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 17.25px;">
//                   <span>XX</span>
//                 </td> 
//               </tr>
//             </tbody>
//           </table>
    
//           <table class="result-table">
//             <tbody>
//               <tr>
//                 <td class="prod-cell left" style="width: 81px;">
//                   <span><b>Итого:</b></span>
//                 </td>
//                 <td class="prod-cell right" style="width: 14px;">
//                   <span>X2X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.125px;">
//                   <span>X3X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.5px;">
//                   <span>X4X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.625px;">
//                   <span>X5X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875px;">
//                   <span>X6X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 14.25px;">
//                   <span>X7X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875px;">
//                   <span>X8X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.875px;">
//                   <span>X9X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.125px;">
//                   <span>X10X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 16.875px;">
//                   <span>X11X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.75px;">
//                   <span>X12X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 17.375px;">
//                   <span>X13X</span>
//                 </td> 
//               </tr>
//             </tbody>
//           </table>

//           <!-- ver2 start -->

//           <table class="data-table">
//             <tbody>
//               <tr style="text-align: center; font-weight: normal; height: 10.75px;" valign="top">
//                 <td style="border-bottom: 0; width: 13.25px;">
//                   <span class="data-table__sp">№ товара</span>
//                 </td> 
//                 <td style="border-bottom: 0; width: 27.5px;">
//                   <span class="data-table__sp">Наименование</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 24px;">
//                   <span class="data-table__sp">Страна происхождения / назначения</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 17.5px;">
//                   <span class="data-table__sp">
//                     Код по ТН
//                     <br/>
//                     ВЭД ТС
//                   </span>
//                 </td>
//                 <td style="width: 41.125px; border: 0;">
//                   <table style="width: 100%;">
//                     <tbody>
//                       <tr style="height: 4.25px; border: 0;">
//                         <td colspan="3" style=" border-left: 0; border-right: 0;">Количество</td>
//                       </tr>
//                       <tr style="height: 6.375px;" valign="top">
//                         <td style="border-bottom: 0; border-left: 0;">Груз. мест</td>
//                         <td style="border-bottom: 0;">
//                           в осн. ед.
//                           <br /> 
//                           изм. кг
//                         </td>
//                         <td style="border-bottom: 0;">
//                           в доп. ед.
//                           <br />
//                            изм.
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </td>
//                 <td style="border-bottom: 0; width: 29.875px;">
//                   <table style="width: 100%;">
//                     <tbody>
//                       <tr style="height: 4.125px; border: 0;">
//                         <td colspan="2" style="border: 0;">Вес, кг</td>
//                       </tr>
//                       <tr style="height: 6.375px;" valign="top">
//                         <td style="border-bottom: 0; border-left: 0;">брутто</td>
//                         <td style="border-bottom: 0;">нетто</td>
//                       </tr>
                      
//                     </tbody>
//                   </table>
//                 </td>
//                 <td style="border-bottom: 0; width: 14.5px;">
//                   <span class="data-table__sp">Фактур. стоим., USD</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 14px;">
//                   <span class="data-table__sp">Тамож. стоим., Руб.</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 16px;">
//                   <span class="data-table__sp">
//                     Статист. Стоим.,
//                     <br />
//                     долл США
//                   </span>
//                 </td>
//                 <td style="border-bottom: 0; width: 15.25px;">
//                   <span class="data-table__sp">Ставка тамож. пошлины</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 17px;">
//                   <span class="data-table__sp">
//                     Тамож.
//                     <br />
//                     пошлина,
//                     <br />
//                     руб.
//                   </span>
//                 </td>
//                 <td style="border-bottom: 0; width: 13.875px;">
//                   <span class="data-table__sp">НДС, руб.</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 17.625px;">
//                   <span class="data-table__sp">Тамож. Сборы за тамож. Оформл., руб</span>
//                 </td>
//               </tr>

//               <tr>
//                 <td class="prod-cell left" style="width: 13px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell left" style="width: 27px;">
//                   <span>Xasd asd asd asd asd asd asd asd asd asdX</span>
//                 </td>
//                 <td class="prod-cell left" style="width: 24px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell left" style="width: 17.25px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.125px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.375px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.625px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.75px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 14.25px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.875px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.125px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 16.875px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.75px;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 17.25px;">
//                   <span>XX</span>
//                 </td> 
//               </tr>

//               <tr>
//                 <td class="prod-cell left" style="width: 81px;">
//                   <span><b>Итого:</b></span>
//                 </td>
//                 <td class="prod-cell right" style="width: 14px;">
//                   <span>X2X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.125px;">
//                   <span>X3X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.5px;">
//                   <span>X4X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.625px;">
//                   <span>X5X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875px;">
//                   <span>X6X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 14.25px;">
//                   <span>X7X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875px;">
//                   <span>X8X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.875px;">
//                   <span>X9X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.125px;">
//                   <span>X10X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 16.875px;">
//                   <span>X11X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.75px;">
//                   <span>X12X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 17.375px;">
//                   <span>X13X</span>
//                 </td> 
//               </tr>

//             </tbody>
//           </table>
    
//           <!-- <table class="data-table"> -->
//             <!-- <tbody valign="top"> -->
//               <!-- Отступы по 1px везде -->
//               <!-- Ширины подогнаны -->
//             <!-- </tbody> -->
//           <!-- </table> -->
    
//           <!-- <table class="result-table">
//             <tbody>
//             </tbody>
//           </table> -->

//           <!-- ver2 end -->
    
//           <table class="declarant">
//             <tbody>
//               <tr>
//                 <td style="width: 128.75px; text-align: right;">
//                   <b>Декларант:</b>
//                 </td>
//                 <td style="padding-left: 1.5px;">
//                   XКОРЕКОВА МАРИЯ АНАТОЛЬЕВНАX
//                 </td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td style="padding-left: 1.5px;">XПАСПОРТ ГРАЖДАНИНА РФ СЕРИЯ 1234 №123346X</td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td style="padding-left: 1.5px;">XВЫДАН УФМС России по Пермскому краю в Осинском р-не 15.04.2017X</td>
//               </tr>
//             </tbody>
//           </table>
    
//         </div>
//       </div>
//     </body>
//     </html>
//////////////////////////

// <!DOCTYPE html>
//     <html>
//     <head>
//       <!-- <meta charset="UTF-8"> -->
//       <!-- <link rel="stylesheet" href="normalize.css" type="text/css"/> -->
//       <!-- <link rel="stylesheet" href="style.css" type="text/css"/> -->
//       <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
//       <title>PDF Document</title>
//       <style>
//         ${normalize()}
//         ${style200()}
//       </style>
//     </head>
//     <body>
//       <div class="document">
//         <div class="document__wrap">

//           <table style="width: 100%; margin-bottom: 0.75mm;">
//             <tbody>
//               <tr>
//                 <td style="text-align: right;">XПальниковский таможенный постX</td>
//               </tr>
//             </tbody>
//           </table>
    
//           <table style="width: 100%; margin-bottom: 3.75mm;">
//             <tbody>
//               <tr>
//                 <td style="text-align: center;"><b>Заявление X1001010/220921X</b></td>
//               </tr>
//               <tr>
//                 <td style="text-align: center;">
//                   Прошу произвести таможенное оформление нижеперечисленного товара в соответствии с Решением Комиссии таможенного союза от 20.05.2010 № 263.
//                   <br />
//                   Сообщаю сведения, необходимые для таможенных целей
//                 </td>
//               </tr>    
//             </tbody>
//           </table>
          
//           <table style="width: 100%; margin-bottom: 2.5mm;">
//             <tbody valign='top'>
//               <tr>
//                 <td style="width: 26.25mm"><b>1. Декларант:</b></td>
//                 <td style="text-transform: uppercase; width: 139mm">XКорекова Мария Анатольевна 618014, Пермский край, Пермь, ул. Елькина, д.49, кв. 44, ПАСРФ №1234 123346 ВЫД. 15.04.2017 УФМС России по Пермскому краю в Осинском р-неX</td>
//                 <td rowspan="8" style="padding-left: 18.75mm; width: 77mm;">
//                   <span><b>9. Дополнительные сведения:</b></span>
//                   <br />
//                   <span style="text-transform: uppercase;">XНакладная ЕА176279747СNX</span>
//                   <br />
//                   <span style="text-transform: uppercase;">Xуведомление таможни 10221030/110819/0004335FX</span>
//                   <br />
//                   <span style="text-transform: uppercase;">Xакт вскрытия акт 16.08.2019X</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td style="width: 26.25mm"><b>2. Отправитель:</b></td>
//                 <td style="text-transform: uppercase; width: 139mm">XLorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi veniam soluta, quos aliquid tenetur accusantium sequi. Nobis explicabo error ipsa rerum nulla eius rem vel.X</td>
//                 <!-- <td></td> -->
//               </tr>
//               <tr>
//                 <td style="width: 26.25mm"><b>3. Получатель:</b></td>
//                 <td style="text-transform: uppercase; width: 139mm">XКорекова Мария Анатольевна 618014, Пермский край, Пермь, ул. Елькина, д.49, кв. 44, ПАСРФ №1234 123346 ВЫД. 15.04.2017 УФМС России по Пермскому краю в Осинском р-неX</td>
//                 <!-- <td></td> -->
//               </tr>
//               <!-- Не задаю ширину -->
//               <tr>
//                 <td colspan="2">
//                   <span style="padding-right: 3mm;"><b>4. Заявляемая таможенная процедура:</b></span>
//                   <span style="text-transform: uppercase;">XИМ40X</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td colspan="2">
//                   <span style="padding-right: 3mm;"><b>5. Условия поставки:</b></span>
//                   <span style="text-transform: uppercase;">XDAP ПЕРМЬX</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td colspan="2">
//                   <span style="padding-right: 3mm;"><b>6. Стоимость перевозки:</b></span>
//                   <span style="text-transform: uppercase;">X100USDX</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td colspan="2">
//                   <span style="padding-right: 3mm;"><b>7. Паспорт сделки:</b></span>
//                   <span style="text-transform: uppercase;">XX</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td colspan="2">
//                   <span style="padding-right: 3mm;"><b>8. Сведения о товаре:</b></span>
//                   <span style="text-transform: uppercase;">XX</span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
    
//           <table style="width: 100%; margin-bottom: 4mm;">
//             <tbody>
//               <tr>
//                 <td style="width: 65.375mm">XКурс валюты на дату 02.09.2019X</td>
//                 <td style="width: 65.375mm">XДоллар США - 66.4897 за 1 USDX</td>
//                 <td style="width: 65.375mm">XЕвро - 73.3847 за 1 EURX</td>
//                 <td style="width: 65.375mm">XЮань - 93.0446 за 10 CHYX</td>
//               </tr>
//             </tbody>
//           </table>
    
//           <!-- Сменить или убрать класс -->
//           <table class="data-table">
//             <tbody>
//               <tr style="text-align: center; font-weight: normal; height: 10.75mm;" valign="top">
//                 <td style="border-bottom: 0; width: 13.25mm;">
//                   <span class="data-table__sp">№ товара</span>
//                 </td> 
//                 <td style="border-bottom: 0; width: 27.5mm;">
//                   <span class="data-table__sp">Наименование</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 24mm;">
//                   <span class="data-table__sp">Страна происхождения / назначения</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 17.5mm;">
//                   <span class="data-table__sp">
//                     Код по ТН
//                     <br/>
//                     ВЭД ТС
//                   </span>
//                 </td>
//                 <td style="width: 41.125mm; border: 0;">
//                   <table style="width: 100%;">
//                     <tbody>
//                       <tr style="height: 4.25mm; border: 0;">
//                         <td colspan="3" style=" border-left: 0; border-right: 0;">Количество</td>
//                       </tr>
//                       <tr style="height: 6.375mm;" valign="top">
//                         <td style="border-bottom: 0; border-left: 0;">Груз. мест</td>
//                         <td style="border-bottom: 0;">
//                           в осн. ед.
//                           <br /> 
//                           изм. кг
//                         </td>
//                         <td style="border-bottom: 0;">
//                           в доп. ед.
//                           <br />
//                            изм.
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </td>
//                 <td style="border-bottom: 0; width: 29.875mm;">
//                   <table style="width: 100%;">
//                     <tbody>
//                       <tr style="height: 4.125mm; border: 0;">
//                         <td colspan="2" style="border: 0;">Вес, кг</td>
//                       </tr>
//                       <tr style="height: 6.375mm;" valign="top">
//                         <td style="border-bottom: 0; border-left: 0;">брутто</td>
//                         <td style="border-bottom: 0;">нетто</td>
//                       </tr>
                      
//                     </tbody>
//                   </table>
//                 </td>
//                 <td style="border-bottom: 0; width: 14.5mm;">
//                   <span class="data-table__sp">Фактур. стоим., USD</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 14mm;">
//                   <span class="data-table__sp">Тамож. стоим., Руб.</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 16mm;">
//                   <span class="data-table__sp">
//                     Статист. Стоим.,
//                     <br />
//                     долл США
//                   </span>
//                 </td>
//                 <td style="border-bottom: 0; width: 15.25mm;">
//                   <span class="data-table__sp">Ставка тамож. пошлины</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 17mm;">
//                   <span class="data-table__sp">
//                     Тамож.
//                     <br />
//                     пошлина,
//                     <br />
//                     руб.
//                   </span>
//                 </td>
//                 <td style="border-bottom: 0; width: 13.875mm;">
//                   <span class="data-table__sp">НДС, руб.</span>
//                 </td>
//                 <td style="border-bottom: 0; width: 17.625mm;">
//                   <span class="data-table__sp">Тамож. Сборы за тамож. Оформл., руб</span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
    
//           <table class="data-table">
//             <tbody valign="top">
//               <!-- Отступы по 1mm везде -->
//               <!-- Ширины подогнаны -->
//               <tr>
//                 <td class="prod-cell left" style="width: 13mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell left" style="width: 27mm;">
//                   <span>Xasd asd asd asd asd asd asd asd asd asdX</span>
//                 </td>
//                 <td class="prod-cell left" style="width: 24mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell left" style="width: 17.25mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.125mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.375mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.625mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.75mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 14.25mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.875mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.125mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 16.875mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.75mm;">
//                   <span>XX</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 17.25mm;">
//                   <span>XX</span>
//                 </td> 
//               </tr>
//             </tbody>
//           </table>
    
//           <table class="result-table">
//             <tbody>
//               <tr>
//                 <td class="prod-cell left" style="width: 81mm;">
//                   <span><b>Итого:</b></span>
//                 </td>
//                 <td class="prod-cell right" style="width: 14mm;">
//                   <span>X2X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.125mm;">
//                   <span>X3X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.5mm;">
//                   <span>X4X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.625mm;">
//                   <span>X5X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875mm;">
//                   <span>X6X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 14.25mm;">
//                   <span>X7X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.875mm;">
//                   <span>X8X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.875mm;">
//                   <span>X9X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 15.125mm;">
//                   <span>X10X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 16.875mm;">
//                   <span>X11X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 13.75mm;">
//                   <span>X12X</span>
//                 </td>
//                 <td class="prod-cell right" style="width: 17.375mm;">
//                   <span>X13X</span>
//                 </td> 
//               </tr>
//             </tbody>
//           </table>
    
//           <table class="declarant">
//             <tbody>
//               <tr>
//                 <td style="width: 128.75mm; text-align: right;">
//                   <b>Декларант:</b>
//                 </td>
//                 <td style="padding-left: 1.5mm;">
//                   XКОРЕКОВА МАРИЯ АНАТОЛЬЕВНАX
//                 </td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td style="padding-left: 1.5mm;">XПАСПОРТ ГРАЖДАНИНА РФ СЕРИЯ 1234 №123346X</td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td style="padding-left: 1.5mm;">XВЫДАН УФМС России по Пермскому краю в Осинском р-не 15.04.2017X</td>
//               </tr>
//             </tbody>
//           </table>
    
//         </div>
//       </div>
//     </body>
//     </html>
//     `


// export default(data) => {

//     return `
//         <div>

//             <table border="0" cellpadding="0" cellspacing="0" width="100%">
//                 <tbody>
//                     <tr valign="top">
//                         <td colspan="2" style="width:100%;text-align:right;" class="right">${data.postFull.unrestricted_value}</td>
//                     </tr>
//                 </tbody>
//             </table>
        
//             <table border="0" cellpadding="0" cellspacing="0" width="100%">
//                 <tbody>
//                     <tr valign="top">
//                         <td colspan="2" style="width:100%;">
//                             <center><b>Заявление NONE/NONE</b></center>
//                             <center>Прошу произвести таможенное оформление нижеперечисленного товара в соответствии с Решением Комиссии таможенного союза от 20.05.2010 № 263.</center>
//                             <center>Сообщаю сведения, необходимые для таможенных целей</center>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>

//             <br />

//             <table border="0" cellpadding="0" cellspacing="0" width="100%">
//                 <tbody>	
//                     <tr valign="top">
//                     <td style="width:70%;" class="left">
//                         <table border="0" cellpadding="0" cellspacing="0" width="100%">
//                         <tbody>
//                             <tr valign="top">
//                                 <td style="width:15%;"><b>1. Декларант:</b></td>
//                                 <td style="width:85%;" class="bigleft">${data.declarant} ${data.addressFull.unrestricted_value}</td>
//                             </tr>
//                             <tr valign="top">
//                             <td class="left"><b>2. Отправитель:</b></td>
//                             <td class="bigleft"><?= $f_OFirma; ?> <?= $f_OStrana; ?>, <?= $f_OAdres; ?> </td>
//                             </tr>
//                             <tr valign="top">
//                             <td class="left"><b>3. Получатель:</b></td>
//                             <td class="bigleft"><?= $f_FIO; ?> <?= $f_AIndex; ?>, <?= $f_ARegion; ?>, <?= $f_AAdres; ?>, ПАСРФ №<?= $f_PSeriya; ?> <?= $f_PNomer; ?> выд. <?= $f_PData_day; ?>.<?= $f_PData_month; ?>.<?= $f_PData_year; ?> <?= $f_POVD; ?> </td>
//                             </tr>
//                         </tbody>
//                         </table>

//                         <p><b>4. Заявляемая таможенная процедура:</b>&nbsp;&nbsp;&nbsp; <?= $f_svVvoz; ?></p>
//                         <p><b>5. Условия поставки:</b>&nbsp;&nbsp;&nbsp; <?= $f_svDAP; ?></p>
//                         <p><b>6. Стоимость перевозки:</b>&nbsp;&nbsp;&nbsp; <?= $f_TCena; ?> <? if ($f_TCena) echo $f_svValuta; ?></p>
//                         <p><b>7. Паспорт сделки:</b>&nbsp;&nbsp;&nbsp; <?= $f_svPassport; ?></p>
//                         <p><b>8. Сведения о товаре:</b></p>

//                     </td>


//                     <td style="width:30%;" class="left">
//                         <p><b>9. Дополнительные сведения:</b></p>
//                         <p><? if ($f_dopdoc1) echo "НАКЛАДНАЯ"; ?> <?= $f_dopdoc1; ?></p>
//                         <p><? if ($f_dopdoc2) echo "УВЕДОМЛЕНИЕ ТАМОЖНИ"; ?> <?= $f_dopdoc2; ?></p>
//                         <p><? if ($f_dopdoc3) echo "АКТ ВСКРЫТИЯ"; ?> <?= $f_dopdoc3; ?></p>
//                         <p><? if ($f_dopdoc4) echo "ИНВОЙС-СЧЕТ"; ?> <?= $f_dopdoc4; ?></p>
//                         <? if ($f_dopdoc6) echo "<p>".$f_dopdoc6."</p>"; ?>
//                         <? if ($f_dopdoc7) echo "<p>".$f_dopdoc7."</p>"; ?>
//                         <? if ($f_dopdoc8) echo "<p>".$f_dopdoc8."</p>"; ?>
//                         <? if ($f_dopdoc9) echo "<p>".$f_dopdoc9."</p>"; ?>
//                     </td>

//                     </tr>
//                 </tbody>
//             </table>

//             <br />

//             <table border="0" cellpadding="0" cellspacing="0" width="100%">
//             <tbody>
//                 <tr valign="top">
//                 <td colspan="4" style="width:25%;">Курс валюты на дату <?= $f_Todey_day; ?>.<?= $f_Todey_month; ?>.<?= $f_Todey_year; ?></td>
//                 <td colspan="4" style="width:25%;">Доллар США &ndash; <?= $f_svUSD; ?> за 1 USD</td>
//                 <td colspan="4" style="width:25%;">Евро &ndash; <?= $f_svEUR; ?> за 1 EUR</td>
//                 <td colspan="4" style="width:25%;">Юань &ndash; <?= $f_svCNY; ?> за 10 CNY</td>
//                 </tr>
//             </tbody>
//             </table>

//             <br />

//             <table border="1" cellpadding="0" cellspacing="0" width="100%">
//             <tbody>
//                 <tr valign="top">
//                 <td rowspan="2" style="width:5%;" class="center">№ товара</td>
//                 <td rowspan="2" style="width:117px;" class="center">Наименование</td>
//                 <td rowspan="2" style="width:101px;" class="center">Страна происхождения / назначения</td>
//                 <td rowspan="2" style="width:74px;" class="center">Код по ТН ВЭД ТС</td>
//                 <td colspan="3" style="width:173px;" class="center">Количество</td>
//                 <td colspan="2" style="width:124px;" class="center">Вес, кг</td>
//                 <td rowspan="2" style="width:62px;" class="center">Фактур. стоим., <?= $f_tovCVal1; ?></td>
//                 <td rowspan="2" style="width:62px;" class="center">Тамож. стоим., Руб.</td>
//                 <td rowspan="2" style="width:63px;" class="center">Статист. Стоим., долл США</td>
//                 <td rowspan="2" style="width:66px;" class="center">Ставка тамож. пошлины</td>
//                 <td rowspan="2" style="width:68px;" class="center">Тамож. пошлина, руб.</td>
//                 <td rowspan="2" style="width:62px;" class="center">НДС, руб.</td>
//                 <td rowspan="2" style="width:75px;" class="center">Тамож. Сборы за тамож. Оформл., рубю</td>
//                 </tr>

//                 <tr valign="top">
//                 <td style="width:50px;" class="center">Груз. мест</td>
//                 <td style="width:61px;" class="center">в осн. ед. изм. кг</td>
//                 <td style="width:61px;" class="center">в доп. ед. изм.</td>
//                 <td style="width:62px;" class="center">брутто</td>
//                 <td style="width:62px;" class="center">нетто</td>
//                 </tr>
                
//             <!-- tov1 -->	
//                 <tr valign="top">
//                 <td class="left">1</td>
//                 <td class="bigleft"><?= $f_tovName1; ?> <?= $f_tovNaznachenie1; ?> <?= $f_tovHarakteristiki1; ?> <?= $f_tovKolichestvo1; ?></td>
//                 <td class="bigleft"><?= $f_OStrana; ?></td>
//                 <td class="left"><?= $f_svKodVed1; ?></td>
//                 <td class="right"><?= $f_tovMest1; ?></td>
//                 <td class="right"><?= $f_tovKG1; ?></td>
//                 <td class="right"><?= $f_tovDopIzm1; ?></td>
//                 <td class="right"><?= $f_tovBrutto1; ?></td>
//                 <td class="right"><?= $f_tovNetto1; ?></td>
//                 <td class="right"><?= $f_tovCena1; ?></td>
//                 <td class="right"><?= $plust1; ?></td>
//                 <td class="right"><?= $plustUSD1; ?></td>
//                 <td class="right"></td>
//                 <td class="right">0.00</td>
//                 <td class="right">0.00</td>
//                 <td class="right">0.00</td>
//                 </tr>
//             <!-- end tov1 -->
            
//             <!-- Здесь он Ифал ещё 5 товаров -->
                
                
//                 <tr valign="top">
//                 <td colspan="4" class="left"><b>Итого:</b></td>
//                 <td class="right"><?= $mesti; ?></td>
//                 <td class="right"><?= $KGi; ?></td>
//                 <td class="right">&nbsp;</td>
//                 <td class="right"><?= $bruttoi; ?></td>
//                 <td class="right"><?= $nettoi; ?></td>
//                 <td class="right"><?= $cenai; ?></td>
//                 <td class="right"><?= $plusti; ?></td>
//                 <td class="right"><?= $plustUSDi; ?></td>
//                 <td class="right">&nbsp;</td>
//                 <td class="right">0.00</td>
//                 <td class="right">0.00</td>
//                 <td class="right">0.00</td>
//                 </tr>
//             </tbody>
//             </table>

//             <br />

//             <table border="0" cellpadding="0" cellspacing="0" width="100%">
//             <tbody>
//                 <tr valign="top">
//                 <td style="width:50%;" class="right"><b>Декларант:</b></td>
//                 <td style="width:50%;" class="bigleft">
//                     <p><?= $f_FIO; ?></p>
//                     <p>ПАСПОРТ ГРАЖДАНИНА РФ серия <?= $f_PSeriya; ?> №<?= $f_PNomer; ?></p>
//                     <p>Выдан <?= $f_POVD; ?> <?= $f_PData_day; ?>.<?= $f_PData_month; ?>.<?= $f_PData_year; ?></p>
//                 </td>
//                 </tr>
//             </tbody>
//             </table>
            
//         </div>`
// }




//То, что здесь уже было
// export default(data) => {
//     return `
//     <!doctype html>
//     <html>
//         <head>
//             <meta charset="utf-8">
//         </head>
//         <body>
//             <div> ${data.declarant} </div>
//         </body>
//     </html>`
// }