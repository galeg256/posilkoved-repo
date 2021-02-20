import React from 'react'

export default class EnterForm extends React.Component {
  render() {
    return (
      <div className='enter-form'>
        {/* wrap можно будет удалить, если не понадобится */}
        <div className='enter-form__wrap'> 
          <div className='enter-form__container'>
            <h1 className='enter-form__title'>Вход</h1>
            <div className='enter-form__login'>
              <input className='login__input' type='email' placeholder='Адрес электронной почты'/>
            </div>
            <div className='enter-form__password'>
              <input className='password__input' type='password' placeholder='Пароль'/>
            </div>
            <div className='enter-form__actions'>
              <a className='actions__register' href='/'>Регистрация</a>
              <a className='actions__recovery'href='/'>Забыли пароль?</a>
              <button className='actions__btn-enter'>Войти</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}