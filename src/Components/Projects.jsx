import React from 'react';
import ProjectBox from './ProjectBox';
import StudentFormImage from '../images/student_enrollment-form.jpg';
import DilawImage from '../images/dilaw.jpg';
import HTMLPortfolioImage from '../images/portfolio.jpg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={StudentFormImage} projectName="StudentForm" />
        <ProjectBox projectPhoto={DilawImage} projectName="Dilaw" />
        <ProjectBox projectPhoto={HTMLPortfolioImage} projectName="HTMLPortfolio" />
      </div>

    </div>
  )
}

export default Projects