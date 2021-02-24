import React from 'react'
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'
// import Auth from './components/auth.js'
import AuthForm from './components/authForm.js'
import RegisterForm from './components/registerForm.js'
import RecoveryForm from './components/recoveryForm.js'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      formType: ''
      // formType: 'auth',
      // formType: 'register',
      // formType: 'recovery',
    }

    this.setFormType = this.setFormType.bind(this)
  }

  setFormType(type = '') {
    this.setState({formType: type})
  }

  render() {
    //говнокод
    let form
    document.querySelector('html').style.overflow = 'hidden' 
    switch (this.state.formType) {
      case 'auth':
        form = <AuthForm setFormType={this.setFormType}/>
        break
      case 'register': 
        form = <RegisterForm setFormType={this.setFormType}/>
        break
      case 'recovery':
        form = <RecoveryForm setFormType={this.setFormType}/>
        break
      default:
        document.querySelector('html').style.overflow = 'visible'
        //visible
        break
    }

    return (
      <div className='app'>
        <Header setFormType={this.setFormType}/>
        <Main />
        <Footer />
        {form}
        {/* <AuthForm /> */}
        {/* <RegisterForm /> */}
        {/* <RecoveryForm /> */}
      </div>
    )
  } 
}

