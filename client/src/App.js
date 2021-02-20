import React from 'react'
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'
import EnterForm from './components/enter-form.js'

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {/* <EnterForm /> */}
        <Header />
        <Main />
        <Footer />
      </div>
    )
  } 
}

