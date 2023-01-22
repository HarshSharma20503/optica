import React from 'react'
import About from '../../components/About/About'
import NavBar from "../../components/NavBar/NavBar"
import Title from '../../components/Title/Title'
import MentorInfo from '../../components/MentorInfo/MentorInfo'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Title />
      <About />
      <MentorInfo/>
    </div>
  )
}

export default Home