import React from 'react'; 
import {FaReact, FaGitAlt, FaGithub, FaFigma, } from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiVercel} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Figma : <FaFigma/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
