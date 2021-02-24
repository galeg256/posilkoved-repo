import React from 'react'
import headerLogo from '../img/logo.png'

export default class Header extends React.Component {
  constructor() {
    super()
    this.handlerLogin = this.handlerLogin.bind(this)
  }

  handlerLogin(evt) {
    evt.preventDefault()
    this.props.setFormType(evt.target.getAttribute('data-type'))
  }

  render() {
    return (
    <header className='header'>

      <div className='header__wrap'>

        <div className='logo'>
          <a className='logo__link' href='/'>
            <img alt='logo' src={headerLogo} />
          </a> 
        </div>
      
        <div className='nav'>
          <ul className='nav__list'>
            <li className='nav__elem'>
              <a className='nav__link' href='/'>Главная</a>
            </li>
            <li className='nav__elem'>
              <a className='nav__link' href='/'>До 200 €</a>
            </li>
            <li className='nav__elem'>
              <a className='nav__link' href='/'>До 1000 €</a>
            </li>
            <li className='nav__elem'>
              <a className='nav__link' href='/'>Личный кабинет</a>
            </li>
          </ul>
        </div>

        <div className='login'>
          <a className='login__enter lg-style' href='/' onClick={this.handlerLogin} data-type='auth'>Вход</a>
          <span> / </span>
          <a className='login__reg lg-style' href='/' onClick={this.handlerLogin} data-type='register'>Регистрация</a>
        </div>

      </div>
    </header>
    )
  }
}