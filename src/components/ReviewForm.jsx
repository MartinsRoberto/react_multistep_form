import {
  BsFillEmojiAngryFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
  BsFillEmojiHeartEyesFill
} from "react-icons/bs";

import React from 'react'
import './ReviewForm.css'

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      <div className="row">
        <label>
          <input
            type="radio"
            value="Muito insatisfeito"
            checked={data.review == "Muito insatisfeito"}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <span><BsFillEmojiAngryFill /></span>
          <p>Muito insatisfeito</p>
        </label>
        <label>
          <input
            type="radio"
            value="Insatisfeito"
            checked={data.review == "Insatisfeito"}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <span><BsFillEmojiFrownFill /></span>
          <p>Insatisfeito</p>
        </label>
        <label>
          <input
            type="radio"
            value="Satisfeito"
            checked={data.review == "Satisfeito"}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <span><BsFillEmojiSmileFill /></span>
          <p>Satisfeito</p>
        </label>
        <label>
          <input
            type="radio"
            value="Muito satisfeito"
            checked={data.review == "Muito satisfeito"}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <span><BsFillEmojiHeartEyesFill /></span>
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="text">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="cooment"
          id="comment"
          placeholder="Conte como foi a sua experiência com o produto..."
          value={data.comment || ""}
          required
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>

    </div>
  )
}

export default ReviewForm