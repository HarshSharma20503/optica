import React from 'react'
import AlumniPage from '../../components/AlumniPage/AlumniPage'

import NavBar from '../../components/NavBar/NavBar'
import PageName from '../../components/PageName/PageName'

function Alumni() {
  return (
    <div>
      <NavBar />
      <PageName page_heading="ALUMNI"/>
      <AlumniPage/>
    </div>
  )
}

export default Alumni