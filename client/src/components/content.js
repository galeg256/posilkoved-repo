import React from 'react'

export default class Content extends React.Component {
  constructor(props) {
    super(props)

    this.handlerSelectForm = this.handlerSelectForm.bind(this)
  }


  handlerSelectForm(evt) {
    evt.preventDefault()

    //Проверка авторизации пользователя
    if (localStorage.length) this.props.setOrderType(this.props.sum)
    else {
      this.props.setDesiredOrder(this.props.sum)
      this.props.setFormType('auth')
    }
  }

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
          <a className='content__link' href='/' onClick={this.handlerSelectForm}>
            Начать оформление
          </a>
        </div>
      
      </div>
    )
  }
}