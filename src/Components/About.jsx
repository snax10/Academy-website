import React from 'react';
import aboutImage from '../images/about.png'

function About() {
  return(
      <div id="about">
            <div className="about-image">
                <img src={aboutImage} alt="" />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maxime perspiciatis 
                consectetur, exercitationem quo rem culpa, veritatis nisi, quidem vitae provident. 
                Ab minus aut aspernatur? Officia voluptate sit veniam adipisci.</p>
                <button>READ MORE</button>
            </div>
      </div>
  )
}

export default About;