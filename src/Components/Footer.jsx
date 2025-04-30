import React from 'react';
import { FaGithub, FaFacebook, FaYoutube } from "react-icons/fa"
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Lennon Jarabese</h4>
      <h4>Copyright &copy; 2025 {'<33'} </h4>
      <div className='footerLinks'>
        <a href="https://github.com/Lnnon" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.youtube.com/watch?v=5PaN0NfK3T4" target="_blank" rel="noreferrer"><FaYoutube/></a>
        <a href='mailTo:johnlennonjarabese@gmail.com' target="_blank" rel="noreferrer"><GrMail/></a>
        <a href="https://www.facebook.com/lennon.jarabese.2024" target="_blank" rel="noreferrer"><FaFacebook /></a>
      </div>
    </footer>
  )
}

export default Footer