import React from 'react'

export default class AuthForm extends React.Component {
  constructor() {
    super()
    this.state={
      login: '',
      password: '',
      errors: {}
    }

    this.handlerLink = this.handlerLink.bind(this)
    this.handlerChangeText = this.handlerChangeText.bind(this)
    this.handlerClose = this.handlerClose.bind(this)
    this.handlerLogin = this.handlerLogin.bind(this)
  }

  handlerLink(evt) {
    evt.preventDefault()
    this.props.setFormType(evt.target.getAttribute('data-type'))
  }

  handlerChangeText(evt) {
    evt.target.className === 'login__input' 
      ? this.setState({login: evt.target.value})
      : this.setState({password: evt.target.value})
  }

  handlerClose() {
    this.props.setFormType()
  }

  handlerLogin() {
    const state = this.state
    async function fetchLogin() {
      const res = await fetch('/api/auth/login', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"login": state.login, "password": state.password})
      })
      const result = await res.json()
      if (res.ok) {
        localStorage.setItem('token', result.result)
        this.props.setFormType()
        console.log('Выполнен вход!')
      } else {
        let ers = {}
        if (res.status === 412) {
          result.errors.forEach( err => {
            if (err.param === 'login') ers.login = err.msg
            if (err.param === 'password') ers.password = err.msg
          })
          this.setState({errors: ers})
        } else {
          ers.other = result.msg
          this.setState({errors: ers})
        }
      }
    }

    fetchLogin.call(this)

    // fetchLogin().then(resp => {
    //   if (resp) console.log('Выполнен вход!')
    //   else this.setState({errors: ers})
    // })

    // const fetchRes = fetchLogin()
    // console.log(fetchRes)
    // if (fetchRes) console.log('Выполнен вход!')
    // else this.setState({errors: ers})
  }

  render() {
    const state = this.state

    return (
      <div className='auth'>
        <div className='auth__container'>
          <h1 className='auth__title'>
            Вход
          </h1>
          <div className='auth__wrap'>
            <div className='auth__login'>
              <input className='login__input' type='email' placeholder='Адрес эл.почты' onChange={this.handlerChangeText}/>
              <div className='login__err'>{state.errors.login}</div>
            </div>
            <div className='auth__password'>
              <input className='password__input' type='password' placeholder='Пароль' onChange={this.handlerChangeText}/>
              <div className='password__err'>{state.errors.password}</div>
            </div>
            <button className='auth__btn-auth' onClick={this.handlerLogin}>
                Войти
            </button>
            <div className='other__err'>{state.errors.other}</div>
            <div className='auth__links'>
              <a className='link__recovery' href='/' onClick={this.handlerLink} data-type='recovery'>
                Забыли пароль?
              </a>
              <a className='link__register' href='/' onClick={this.handlerLink} data-type='register'>
                Регистрация
              </a>
            </div>
          </div>
          <div className='closer' onClick={this.handlerClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(51,51,51,0.5)" width="20px" height="20px" viewBox="0 0 15 15"><path d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#xA;&#x9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#xA;&#x9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#xA;&#x9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#xA;&#x9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"/></svg>
          </div>
        </div>
      </div>
    )
  }
}