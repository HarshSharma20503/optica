import "./Footer.scss";
import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        Copyright &copy; 2022 JIIT OPTICA Chapter | All Rights Reserved

      </div>
      <div className="socials">
        <a href="https://www.instagram.com/jiitopticachapter"><i class="icon fa-brands fa-instagram fa-lg" /></a>
        <a href="https://www.linkedin.com/company/jiitopticachapter/mycompany/"><i class="icon fa-brands fa-linkedin fa-lg" /></a>
        <a href="https://github.com/jiitopticachapter"><i class="icon fa-brands fa-github fa-lg" /></a>
        <a href="https://www.facebook.com/jiitopticachapter/"><i class="icon fa-brands fa-facebook fa-lg" /></a>
        <a href="https://twitter.com/jiitoptica"><i class="icon fa-brands fa-twitter fa-lg" /></a>
        <a href="mailto: jiitopticachapter@gmail.com"><i class="icon fa-regular fa-envelope fa-lg" /></a>

      </div>
    </div>
  )
}

export default Footer
