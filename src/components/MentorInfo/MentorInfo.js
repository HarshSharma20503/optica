import React from "react";
import { Link } from "react-router-dom";
import "./MentorInfo.scss";
import { useState } from "react";

function MentorInfo() {
  const [isShown1, setIsShown1] = useState(true);
  const [isShown2, setIsShown2] = useState(true);
  const [isShown3, setIsShown3] = useState(true);

  return (
    <>
      <div className="mentor">
        <h1 className="mentor-title">OUR MENTORS</h1>
        <div className="mentor-card-container">
          <div className="mentor-details">
            <div className="mentor-image" onMouseEnter={() => setIsShown1(false)} onMouseLeave={() => setIsShown1(true)}>
              <img src="../images/anuraj_panwar.jpg" alt="img" width="200px" />
            </div>
            <div className="mentor-content">
              <h2>
                Dr. ANURAJ PANWAR
                <br />
                <span>FACULTY ADVISOR</span>
                <Link to="/mentors">
                  <button className="mentor-button">Know more</button>
                </Link>
              </h2>
            </div>
            {isShown1 && <h2 className="mentor-name">Dr. ANURAJ PANWAR</h2>}
          </div>
          <div className="mentor-details">
            <div className="mentor-image" onMouseEnter={() => setIsShown2(false)} onMouseLeave={() => setIsShown2(true)}>
              <img src="../images/manoj_tripathi.png" alt="img" width="200px" />
            </div>
            <div className="mentor-content">
              <h2>
                Dr. MANOJ TRIPATHI
                <br />
                <span>CO-FACULTY ADVISOR</span>
                <Link to="/mentors">
                  <button className="mentor-button">Know more</button>
                </Link>
              </h2>
            </div>
            {isShown2 && <h2 className="mentor-name">Dr. Manoj Tripathi</h2>}
          </div>
          <div className="mentor-details">
            <div className="mentor-image" onMouseEnter={() => setIsShown3(false)} onMouseLeave={() => setIsShown3(true)}>
              <img
                src="../images/ashish_bhatnagar.jpg"
                alt="img"
                width="200px"
              />
            </div>
            <div className="mentor-content">
              <h2>
                Dr. ASHISH BHATNAGAR
                <br />
                <span>CO-FACULTY ADVISOR</span>
                <Link to="/mentors">
                  <button className="mentor-button">Know more</button>
                </Link>
              </h2>
            </div>
            {isShown3 && <h2 className="mentor-name">Dr. ASHISH BHATNAGAR</h2>}
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorInfo;
