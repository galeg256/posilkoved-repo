import React from 'react'

export default class Content extends React.Component {
  render() {
    return (
      <div className='content__wrap'>

        <div className='content__pic'>
          <img src={this.props.pic} alt='people'/>
        </div>

        <div className='content__order'>
          <h3 className='content__title'>
            Посылка до <b>{this.props.sum}</b> 
            <span> &euro;</span>
          </h3>
          <a className='content__link' href='/'>Начать оформление</a>
        </div>

      </div>
    )
  }
}