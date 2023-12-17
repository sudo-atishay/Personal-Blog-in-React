// Home.js

import React from "react";
import "../styles/Home.css";
import RectangleImage from "../assets/rectangle.jpg";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="about-content">
          <div className="rectangle-image-container">
            <img
              src={RectangleImage}
              alt="Rectangle"
              className="rectangle-image"
            />
          </div>
          <div className="aboutme-container">
            <div className="aboutme-box">
              <h1 className="aboutme">About Me</h1>
              <p>
                Hi, I'm Atishay Jain, a passionate software engineering student
                at Stevens Institute of Technology. My skills include
                JavaScript, Python, Java, C, C++, and more. AWS Certified Cloud
                Practitioner.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="additional-content">
        <div className="additional-content-box">
          {/* No heading for Additional Content */}
          <p>
  "Programming is like playing a piano. Sometimes you produce beautiful melodies, and other times you wonder who put that cat on the keyboard. Embrace the symphony of coding!"
</p>

        </div>
      </div>
    </div>
  );
}

export default Home;
