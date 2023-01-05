import React from 'react'
import './UserForm.css'

const UserForm = ({data, updateFieldHandler}) => {
  return (
    <div className="user-form">
      <label>
        <span>Nome:</span>
        <input type="text" placeholder='Digite o seu nome' value={data.name} onChange={(e) => updateFieldHandler('name', e.target.value)}/>
      </label>
      <label>
        <span>E-mail:</span>
        <input type="email" placeholder='Digite o seu e-mail' value={data.email} onChange={(e) => updateFieldHandler('email', e.target.value)}/>
      </label>
    </div>
  )
}

export default UserForm