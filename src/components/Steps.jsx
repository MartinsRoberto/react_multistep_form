import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import React from 'react'

import './Steps.css'

const Steps = () => {
  return (
    <div className="steps">
      <div>
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  )
}

export default Steps