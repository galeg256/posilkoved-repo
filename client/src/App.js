import React from 'react'
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'
import Auth from './components/auth.js'

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Auth />
        <Header />
        <Main />
        <Footer />
      </div>
    )
  } 
}

