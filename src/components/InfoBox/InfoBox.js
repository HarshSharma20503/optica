import "./InfoBox.scss"
import React from 'react'

const InfoBox1 = (props) => {
    return (
        <div className="infobox">
            <div className="infobox_img">
                <img src={props.image} alt="img here" />
            </div>
            <div className="infobox_content">
                <div className="infobox_heading"><h1>{props.heading}</h1></div>
                <div className="infobox_info"><p>{props.info}</p></div>
            </div>
        </div>
    )
}
const InfoBox2 = (props) => {
    return (
        <div className="infobox">
            <div className="infobox_content">
                <div className="infobox_heading"><h1>{props.heading}</h1></div>
                <div className="infobox_info"><p>{props.info}</p></div>
            </div>
            <div className="infobox_img">
                <img src={props.image} alt="img here" />
            </div>

        </div>
    )
}



const InfoBox3 = (props) => {
    return (
        <div className="infobox_3">
            <div className="infobox_3_heading"><h1>{props.heading}</h1></div>
            <div className="infobox_3_info"><p>{props.info}</p></div>
        </div>
    )
}



export { InfoBox1, InfoBox2, InfoBox3 };