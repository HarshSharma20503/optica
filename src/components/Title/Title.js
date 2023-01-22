import React from 'react'
import "./Title.css"

function Title() {
  return (
    <div className="title">
        <div className="title-bg">
            {/* <img className="bg" src = "/images/background.jpg" alt = "" /> */}
        </div>
        <div className="content">
            <h1>
                JIIT OPTICA CHAPTER
            </h1>
        </div>
        <div className="jumping_arrow">
          <i className="fa fa-angle-double-down " />
        </div>
    </div>
  )
}

export default Title