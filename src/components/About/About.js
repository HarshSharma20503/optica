import "./About.scss";
import React from 'react'
import { InfoBox1, InfoBox2, InfoBox3 } from "../InfoBox/InfoBox";


function About() {
  return (
    <div className="about">
      <div id="about_id" className="spacer"></div>
      <h1 className="about_title">ABOUT US</h1>
      <InfoBox3
        heading="Who We Are"
        info="Established in September of 2017, the JIIT-Optica Student Chapter is Jaypee Institute of Information Technology’s only internationally recognised scientific body. We are a group of science enthusiasts that are hungry for impact. We conduct workshops on the latest skills in STEM, go for industry visits, compete in hackathons, do some research and attend international conferences. "
      />
      <InfoBox1
        image="images/about_one.png"
        heading="Our Community"
        info="We welcome anyone interested in science & technology. Our team is committed to being a community of equal access , free of discrimination, prejudice, or bias. Furthermore, our most valuable members range from people who were national science quiz champions in high school to people who had not written a single line of code until they joined the team. No previous scientific exposure or programming experience is required. " />
      <InfoBox2
        image="/images/about_two.jpg"
        heading="Life as a Member"
        info="The JIIT-Optica Student Chapter is more than just a scientific community, it is a family. We learn and grow together,from learning new scientific phenomena to creating computer simulations with general meetings, workshops, and industry visits. Our members have many opportunities to be involved beyond just workshops , including in the organization of our annual conference on Optics & Photonics, outreach events to NGOs and other colleges, and travel opportunities at international conferences. " />
      <InfoBox1
        image="/images/about_three.jpg"
        heading="Life After Optica"
        info="We are a very young organisation and hence have a small alumni. Our seniors have gone on to pursue a variety of successes in their fields,including getting internships at Exicom Power Solutions, LG Electronics, NTPC, Tata Communications and Zomato. Our first batch of graduating members have been placed in Deloitte, Infosys, Cognizant and Tata Consultancy Services. Membership in the JIIT-Optica Student Chapter is for life. " />
    </div>

  )
}

export default About