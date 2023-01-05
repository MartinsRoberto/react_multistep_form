import React from 'react'
import './UserForm.css'

const UserForm = () => {
  return (
    <div className="user-form">
      <label>
        <span>Nome:</span>
        <input type="text" placeholder='Digite o seu nome'/>
      </label>
      <label>
        <span>E-mail:</span>
        <input type="email" placeholder='Digite o seu e-mail'/>
      </label>
    </div>
  )
}

export default UserForm