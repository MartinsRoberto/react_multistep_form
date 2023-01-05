import {
  BsFillEmojiAngryFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
  BsFillEmojiHeartEyesFill
} from "react-icons/bs";

import React from 'react'
import './ReviewForm.css'

const ReviewForm = () => {
  return (
    <div className="review-form">
      <label>
        <input type="radio"/>
        <span><BsFillEmojiAngryFill/></span>
        <p>Muito insatisfeito</p>
      </label>
      <label>
        <input type="radio"/>
        <span><BsFillEmojiFrownFill/></span>
        <p>insatisfeito</p>
      </label>
      <label>
        <input type="radio"/>
        <span><BsFillEmojiNeutralFill/></span>
        <p>Normal</p>
      </label>
      <label>
        <input type="radio"/>
        <span><BsFillEmojiSmileFill/></span>
        <p>Satisfeito</p>
      </label>
      <label>
        <input type="radio"/>
        <span><BsFillEmojiHeartEyesFill/></span>
        <p>Muito atisfeito</p>
      </label>
    </div>
  )
}

export default ReviewForm