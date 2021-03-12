import React from 'react'
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'
import AuthForm from './components/authForm.js'
import RegisterForm from './components/registerForm.js'
import RecoveryForm from './components/recoveryForm.js'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      formType: '',
      mainType: 'home', //home
      orderType: '200', //200
      login: '',
      // formType: 'auth',
      // formType: 'register',
      // formType: 'recovery',
    }

    this.setFormType = this.setFormType.bind(this)
    this.setMainType = this.setMainType.bind(this)
    this.fetchGetLogin = this.fetchGetLogin.bind(this)
    this.delLogin = this.delLogin.bind(this)
    this.setOrderType = this.setOrderType.bind(this)
  }

  componentDidMount() {
    this.fetchGetLogin()
  }

  async fetchGetLogin(userLogin) {
    if (userLogin) {
      this.setState({login: userLogin})
    } else {
      const res = await fetch('/api/auth', { 
          headers: {
            'Content-Type':'application/json',
            'Authorization': localStorage.getItem('token')
          },
        }
      )
      const result = await res.json()

      if (res.ok) {
        this.setState({login: result.result})
      } // нет проверки на ошибки при get запросе!!!!
    }
  }

  setMainType(type = 'home') {
    this.setState({mainType: type})
  }

  setFormType(type = '') {
    this.setState({formType: type})
  }

  delLogin() {
    this.setState({login: ''})
  }

  setOrderType(type) {
    console.log(type)
    if (!localStorage.length) return
    if (type === '200') {
      this.setState({
        orderType: '200',
        mainType: 'forms',
      })
    } else if (type === '1000') {
      this.setState({
        orderType: '1000',
        mainType: 'forms'
      })
    }
  }

  render() {
    //говнокод
    let form
    document.querySelector('html').style.overflow = 'hidden' 
    switch (this.state.formType) {
      case 'auth':
        form = <AuthForm setFormType={this.setFormType} getLogin={this.fetchGetLogin} />
        break
      case 'register': 
        form = <RegisterForm setFormType={this.setFormType} getLogin={this.fetchGetLogin}/>
        break
      case 'recovery':
        form = <RecoveryForm setFormType={this.setFormType} />
        break
      default:
        document.querySelector('html').style.overflow = 'visible'
        //visible
        break
    }

    return (
      <div className='app'>
        <Header 
          setFormType={this.setFormType} 
          setMainType={this.setMainType}
          delLogin={this.delLogin}
          login={this.state.login}
        />
        <Main 
          mainType={this.state.mainType} 
          setOrderType={this.setOrderType}
          orderType={this.state.orderType}
          setFormType={this.setFormType} 
        />
        <Footer />
        {form}
        {/* <AuthForm /> */}
        {/* <RegisterForm /> */}
        {/* <RecoveryForm /> */}
      </div>
    )
  } 
}

