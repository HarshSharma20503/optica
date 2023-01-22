import React from 'react'
import {eventData2018_19, eventData2020_21, eventData2022_23} from './EventData'
import './EventPage.scss'
import YearButton from '../YearButton/YearButton'
import { EventCard } from './EventCard';

const event = () => {
    
  return (

    <div className="events-container">
      <div className="year-buttons">
        <YearButton text='2022-23'/>
        <YearButton text='2020-21'/>
        <YearButton text='2018-19'/>
      </div>
      <div className="event-card-container">
        
      {eventData2022_23.map((val,ind)=>{
          return (
            <EventCard 
              key={ind} 
              imgsrc={val.imgUrl} 
              title={val.title} 
              description={val.description}
            />
          )
        })}

      </div>
    </div>
  )
}

export default event