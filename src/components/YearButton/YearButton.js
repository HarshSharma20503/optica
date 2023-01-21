import "./YearButton.scss";
import React from 'react'

const YearButton = (props) => {
  return (
    <div className = "button ">
        <div className="button-text" onClick={()=>{props.SetYear(`${props.text}`)}}>{props.text}</div>
    </div>
  )
}

export default YearButton