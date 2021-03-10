import React from 'react'
import Content from './content.js'
import introLogo from '../img/logo2.png'
import introPic from '../img/man.png'
import introBg from '../img/fon.png'
import before200 from '../img/before200.png'
import before1000 from '../img/before1000.png'

export default class Home extends React.Component {
  render() {
    return (   
      <div className='home'>
        <section className='intro'>
          <div className='intro__wrap'>
            <div className='intro__logo'>
              <img className='logo-pic' src={introLogo} alt='logo'/>
            </div>
            <div className='intro__title'>
              Помощь <br/>
              в подготовке <br/>
              пакета <br/>
              документов <br/>
              для таможенного <br/>
              оформления
            </div>
            <div className='intro__pic'>
              <img className='man-pic' src={introPic} alt='man'/>
            </div>
            <div className='intro__bg-pic'>
              <img className='bg-pic' src={introBg} alt='background'/>
            </div>
          </div>
        </section>

        <section className='before200' style={{backgroundColor: '#12b9e3'}}>
          <Content pic={before200} sum='200'/>
        </section>
        
        <section className='before1000' style={{backgroundColor: '#ee7ea3'}}>
          <Content pic={before1000} sum='1000'/>
        </section>
      </div>
    )
  }
}