import React from 'react'
import Home from './home.js'
import Forms from './forms.js'

export default class Main extends React.Component {

  render() {
    // console.log(this.props.orderType)


    const main = this.props.mainType === 'home' ? <Home setOrderType={this.props.setOrderType} setFormType={this.props.setFormType} /> 
      : this.props.mainType === 'forms' ? <Forms orderType={this.props.orderType}/> : null

    return <main className='main'>
      {main}
    </main>
  }
}























//Старый Main
  //   return ( 
  //     <main className='main'>

  //       <section className='intro'>
  //         <div className='intro__wrap'>
  //           <div className='intro__logo'>
  //             <img className='logo-pic' src={introLogo} alt='logo'/>
  //           </div>
  //           <div className='intro__title'>
  //             Помощь <br/>
  //             в подготовке <br/>
  //             пакета <br/>
  //             документов <br/>
  //             для таможенного <br/>
  //             оформления
  //           </div>
  //           <div className='intro__pic'>
  //             <img className='man-pic' src={introPic} alt='man'/>
  //           </div>
  //           <div className='intro__bg-pic'>
  //             <img className='bg-pic' src={introBg} alt='background'/>
  //           </div>
  //         </div>
  //       </section>

  //       <section className='before200' style={{backgroundColor: '#12b9e3'}}>
  //         <Content pic={before200} sum='200'/>
  //       </section>
        
  //       <section className='before1000' style={{backgroundColor: '#ee7ea3'}}>
  //         <Content pic={before1000} sum='1000'/>
  //       </section>

  //     </main>
  //   )
  // }
