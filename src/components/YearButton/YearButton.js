import "./YearButton.scss";
import React from 'react'

const YearButton = (props) => {
  return (
    <div className = "button " onClick={()=>{props.SetYear(`${props.text}`)}}>
        <div className="button-text" >{props.text}</div>
    </div>
  )
}

export default YearButton