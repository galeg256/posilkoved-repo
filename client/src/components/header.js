import React from 'react'
import headerLogo from '../img/logo.png'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {

    }

    this.handlerLogin = this.handlerLogin.bind(this)
    this.handlerExit = this.handlerExit.bind(this)
    this.handlerNav = this.handlerNav.bind(this)

    this.getLinksStyle = this.getLinksStyle.bind(this)

    this.linksOnMouseEnter = this.linksOnMouseEnter.bind(this)
    this.linksOnMouseLeave = this.linksOnMouseLeave.bind(this)
    this.linksOnFocus = this.linksOnFocus.bind(this)
    this.linksOnBlur = this.linksOnBlur.bind(this)
  }

  handlerLogin(evt) {
    evt.preventDefault()
    this.props.setFormType(evt.target.getAttribute('data-type'))
  }

  handlerAccount(evt) {
    evt.preventDefault()
    alert('Личный кабинет находится в разработке...')
  }

  handlerExit(evt) {
    evt.preventDefault()
    localStorage.removeItem('token')
    this.props.delLogin()
    this.props.setMainType('home')
    this.props.setOrderType()
  }

  handlerNav(evt) {
    evt.preventDefault()
    // console.log(evt.target.getAttribute('href'))
    switch(evt.target.getAttribute('href')) {
      case '200': {
        if (localStorage.length) this.props.setOrderType('200')
        else {
          this.props.setDesiredOrder('200')
          this.props.setFormType('auth')
        }
        break
      }
      case '1000': {
        if (localStorage.length) this.props.setOrderType('1000')
        else {
          this.props.setDesiredOrder('1000')
          this.props.setFormType('auth')
        }
        break
      }
      case 'account': {
        alert('Личный кабинет находится в разработке...')
        break
      }
      default: return
    }
  }

  getLinksStyle(evt) {
    const jsClass = evt.target.classList[1].slice(3) //home, form200, form1000, account

    if (jsClass === this.props.selectedPage) return

    evt.target.classList.toggle('nav__link-focus')
  }

  linksOnFocus(evt) {
    this.getLinksStyle(evt)
  }

  linksOnBlur(evt) {
    this.getLinksStyle(evt)
  }

  linksOnMouseEnter(evt) {
    this.getLinksStyle(evt)
  }

  linksOnMouseLeave(evt) {
    this.getLinksStyle(evt)
  }

  render() {
    // console.log(this.props.selectedPage)

    const logRegBtns = (
      <div className='login'>
        <a className='login__enter lg-style' href='/' onClick={this.handlerLogin} data-type='auth'>
          Вход
        </a>
        <span> / </span>
        <a className='login__reg lg-style' href='/' onClick={this.handlerLogin} data-type='register'>
          Регистрация
        </a>
      </div>
    )

    const accExitBtns = (
      <div className='login'>
        <a className='login__account lg-style' href='/' onClick={this.handlerAccount} data-type='auth'>
          {this.props.login}
        </a>
        <span> / </span>
        <a className='login-exit lg-style' href='/' onClick={this.handlerExit} data-type='register'>
          Выход
        </a>
      </div>
    )

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
              <a 
                className={`nav__link js-home${this.props.selectedPage === 'home' ? ' nav__link-selected' : ''}`} //`link__home nav__link-selected` 
                href='/' 
                onFocus={this.linksOnFocus} 
                onBlur={this.linksOnBlur}
                onMouseEnter={this.linksOnMouseEnter}
                onMouseLeave={this.linksOnMouseLeave}
              >
                Главная
              </a>
            </li>
            <li className='nav__elem'>
              <a 
                className={`nav__link js-form200${this.props.selectedPage === 'form200' ? ' nav__link-selected' : ''}`}
                href='200' 
                onClick={this.handlerNav} 
                onFocus={this.linksOnFocus} 
                onBlur={this.linksOnBlur}
                onMouseEnter={this.linksOnMouseEnter}
                onMouseLeave={this.linksOnMouseLeave}
              >
                До 200 €
              </a>
            </li>
            <li className='nav__elem'>
              <a 
                className={`nav__link js-form1000${this.props.selectedPage === 'form1000' ? ' nav__link-selected' : ''}`}
                href='1000' 
                onClick={this.handlerNav} 
                onFocus={this.linksOnFocus} 
                onBlur={this.linksOnBlur}
                onMouseEnter={this.linksOnMouseEnter}
                onMouseLeave={this.linksOnMouseLeave}
              >
                До 1000 €
              </a>
            </li>
            <li className='nav__elem'>
              <a 
                className={`nav__link js-account${this.props.selectedPage === 'account' ? ' nav__link-selected' : ''}`}
                href='account' 
                onClick={this.handlerNav} 
                onFocus={this.linksOnFocus} 
                onBlur={this.linksOnBlur}
                onMouseEnter={this.linksOnMouseEnter}
                onMouseLeave={this.linksOnMouseLeave}
              >
                Личный кабинет
              </a>
            </li>
          </ul>
        </div>
        {localStorage.length ? accExitBtns : logRegBtns}

      </div>
    </header>
    )
  }
}