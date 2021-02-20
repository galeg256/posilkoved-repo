import React from 'react'
import phone from '../img/phone.png'
import mail from '../img/mail.png'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className='footer'>
        <div className='footer__wrap'>
          <div className='phone'>
            <img className='phone__pic' src={phone} alt='phone' />
            <span className='phone__number'>+7 902 795 35 33</span>
          </div>
          <div className='mail'>
            <img className='mail__pic' src={mail} alt='mail' />
            <span className='mail__adress'>posilkoved@yandex.ru</span>
          </div>
        </div>
      </footer>
    )
  }
}