import React from 'react';
import Skills from './Skills.jsx';
import Tilt from 'react-parallax-tilt';
import user from "../images/user.png";

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          Hi, I’m <b>Lennon Jarabese</b>, a passionate IT student at <b>Dalubhasaan ng Lungsod ng Lungsod ng Lucena </b> 
          with a passion for technology and problem-solving. <br></br> <br></br> My primary interests lie in web 
          development and networking topologies, where I enjoy crafting efficient systems and 
          solutions.
          </p>
        </div>

        <div>
          <Tilt>
          <img 
            src={user} 
            alt="User" 
            className="user" 
          />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        
      </div>
    </>
  )
}

export default About