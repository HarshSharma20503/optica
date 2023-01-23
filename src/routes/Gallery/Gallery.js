import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import PageName from '../../components/PageName/PageName'
import Gallerygrid from '../../components/Gallery/Gallerygrid'

export const Gallery = () => {
  return (
    <>
        <Navbar/>
        <PageName page_heading="Gallery"/>
        <Gallerygrid />
    </>
  )
}

export default  Gallery;


