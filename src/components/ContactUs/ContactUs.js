import React from "react";
import "./ContactUs.scss";
function ContactUs() {
  return (
    <>
      <div className="contactUs">
      <div class="ContactUs-container">
        <div class="ContactUs-content">
          <div class="ContactUs-left-side">
            <div class="ContactUs-address ContactUs-details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="ContactUs-topic">Address</div>
              <div class="ContactUs-text-one">JIIT - Noida</div>
              <div class="ContactUs-text-two">Sector - 62</div>
            </div>
            <div class="ContactUs-phone ContactUs-details">
              <i class="fas fa-phone-alt"></i>
              <div class="ContactUs-topic">Phone</div>
              <div class="ContactUs-text-one">+91 9044552333</div>
              <div class="ContactUs-text-two">+91 8882988313</div>
            </div>
            <div class="ContactUs-email ContactUs-details">
              <i class="fas fa-envelope"></i>
              <div class="ContactUs-topic">Email</div>
              <div class="ContactUs-text-one">contact@jiitopticachapter.com</div>
              <div class="ContactUs-text-two">jiitopticachapter@gmail.com</div>
            </div>
          </div>
          <div class="ContactUs-right-side">
            <div class="ContactUs-topic-text">Send us a message</div>
            
            <form action="#">
              <div class="ContactUs-input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div class="ContactUs-input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div class="ContactUs-input-box ContactUs-message-box">
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
              </div>
              <div class="ContactUs-button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ContactUs;

