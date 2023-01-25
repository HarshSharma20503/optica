import React from 'react';
import MentorDetails from '../../components/MentorInfo/MentorDetails';
import NavBar from '../../components/NavBar/NavBar';
import PageName from '../../components/PageName/PageName';

const Mentors = () => {
  return (
    <div>
      <NavBar />
      <PageName page_heading="Mentors"/>
      <MentorDetails/>
    </div>
  )
}

export default Mentors
