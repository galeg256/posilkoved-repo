import React from 'react'

export default class Auth extends React.Component {
  constructor() {
    super()
    this.state={
      //login
      // formType: 'login',
      formType: 'register',
      // formType: 'recovery'
      email: 'mashka123@mail.ru',
      password: '098765',
    }

    this.handlerOK = this.handlerOK.bind(this)
  }

  handlerOK() {
    const state = this.state
    if (state.formType === 'login') {
      async function fetchLogin() {
        const res = await fetch('/api/auth/login', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({"login": state.email, "password": state.password})
        })
        const result = await res.json()
        if (res.ok) {
          console.log('Okay')
          localStorage.setItem('token', result.result)
          // console.log('Okay')
        } else {
          console.log(result.msg)
          //Распарсить errors (ошибки под поля)
          // console.log(result.errors)
        }
      }

      fetchLogin()
    }

    if (state.formType === 'register') {
      async function fetchRegister() {
        const res = await fetch('/api/auth/register', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({"login": state.email, "password": state.password})
        })
        const result = await res.json()
        if (res.ok) {
          console.log('Okay')
          localStorage.setItem('token', result.result)
          // console.log('Okay')
        } else {
          console.log(result.msg)
          //Распарсить errors (ошибки под поля)
          // console.log(result.errors)
        }
      }

      fetchRegister()
    }
  }

  getDynamicData() {
    //title
    const data = []
    switch(this.state.formType) {
      case 'login': {
        data.push('Вход')
        data.push(
          <div className='auth__password'>
            <input className='login__input' type='password' placeholder='Пароль'/>
          </div>
        )
        data.push(null)
        data.push('Войти')
        data.push(
          <div className='auth__links'>
            <a className='link__recovery' href='/'>
              Забыли пароль?
            </a>
            <a className='link__register' href='/'>
              Регистрация
            </a>
          </div>
        )
        break
      }
      case 'register': {
        data.push('Регистрация')
        data.push(
          <div className='auth__password'>
            <input className='login__input' type='password' placeholder='Пароль'/>
          </div>
        )
        data.push(
          <div className='auth__password'>
            <input className='login__input' type='password' placeholder='Повторите пароль'/>
          </div>
        )
        data.push('Зарегистрироваться')
        data.push(
          <div className='auth__links' style={{justifyContent: "center"}}>
            <a className='link__login' href='/'>
              У меня уже есть аккаунт!
            </a>
          </div>
        )
        break
      }
      case 'recovery': {
        data.push('Восстановление пароля')
        data.push(null)
        data.push(null)
        data.push('Восстановить пароль')
        data.push(
          <div className='auth__links'>
            <a className='link__register' href='/'>
              Регистрация
            </a>
            <a className='link__login' href='/'>
              Я вспомнил пароль!
            </a>
          </div>
        )
        break
      }
      default : {}
    }
    
    return data
  }



  render() {
    const [title, passInput, repeatPassInput, btnText, links] = this.getDynamicData()

    return (
      <div className='auth'>
        <div className='auth__container'>
          <h1 className='auth__title'>
            {title}
          </h1>
          <div className='auth__wrap'>
            <div className='auth__login'>
              <input className='login__input' type='email' placeholder='Адрес эл.почты'/>
            </div>
            {passInput}
            {repeatPassInput}
            <button className='auth__btn-auth' onClick={this.handlerOK}>
                {btnText}
            </button>
            {links}
          </div>
        </div>
      </div>
    )
  }
}


{/* <div className='auth__links'>
              <a className='link__register' href='/'>
                Регистрация
              </a>
              <a className='link__recovery' href='/'>
                Забыли пароль?
              </a>
            </div> */}


{/* <div className='auth__container'>
            <h1 className='auth__title'>Вход</h1>
            <div className='auth__login'>
              <input className='login__input' type='email' placeholder='Адрес электронной почты'/>
            </div>
            <div className='auth__password'>
              <input className='password__input' type='password' placeholder='Пароль'/>
            </div>
            <div className='auth__actions'>
              <a className='actions__register' href='/'>Регистрация</a>
              <a className='actions__recovery'href='/'>Забыли пароль?</a>
              <button className='actions__btn-enter'>Войти</button>
            </div>
          </div> */}