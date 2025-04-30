import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    StudentFormDesc : "A simple HTML and CSS project for a Student Enrollment Form that collects basic student details with a clean and responsive design.",
    StudentFormGithub : "https://github.com/Lnnon/Enrollment-Form",
    StudentFormWebsite : "https://lnnon.github.io/Enrollment-Form/",

    DilawDesc : "This HTML and CSS project is a band website for Dilaw, an indie rock group from the Philippines. It features a bold design, navigation menu, band bio, and highlights their latest singles and members.",
    DilawGithub : "https://github.com/Lnnon/Assignment-1",
    DilawWebsite : "https://lnnon.github.io/Assignment-1/",

    HTMLPortfolioDesc:"This is a clean HTML/CSS portfolio homepage for Lennon Jarabese, a UX/UI Designer, featuring a dark theme, bold intro text, and a simple top navigation.",
    HTMLPortfolioGithub:"https://github.com/Lnnon/My-Portfolio-Website",
    HTMLPortfolioWebsite:"https://lnnon.github.io/My-Portfolio-Website/",
  
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target="_blank" rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target="_blank" rel="noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox