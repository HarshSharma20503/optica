import React from 'react'
import About from '../../components/About/About'
import NavBar from "../../components/NavBar/NavBar"
import Title from '../../components/Title/Title'
import MentorInfo from '../../components/MentorInfo/MentorInfo'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Title />
      <About />
      <MentorInfo/>
      <Footer/>
    </div>
  )
}

export default Home