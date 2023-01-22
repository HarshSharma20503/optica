import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import PageName from '../../components/PageName/PageName'
import Event from '../../components/EventPage/Event'

const Events = () => {
  return (
    <>
        <Navbar/>
        <PageName page_heading="PAST EVENTS"/>
        <Event />
    </>
  )
}

export default Events