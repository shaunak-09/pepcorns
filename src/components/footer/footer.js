import React from 'react'
import './footer.css'
import logo from '../navbar/logo.png'
import { AiOutlineInstagram} from "react-icons/ai";
import { AiFillFacebook} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";

function Footer() {
  return (
    <div className='footer'>
    <div className='footer-content'>
        <div className='about'>
        <div className='name'>
            <img src={logo}></img>
        </div>
        <p>Enabling everyday people to invest
in startups they believe in</p>
         <div className='icons'>
         <div className='icon'><AiOutlineInstagram /></div>
         <div className='icon'><AiFillFacebook /></div>
         <div className='icon'><AiFillLinkedin/></div> 
         
         
         </div>
        </div>
      <div className='investors'>
        <h2>FOR INVESTORS</h2>
        <a>Start Investing</a>
        <a>How Investing works</a>
      </div>
      <div className='startups'>
      <h2>FOR STARTUPS</h2>
      <a>Raise Capital</a>
      <a>How it works</a>
      <a>Instruments</a>
      </div>
      <div className='company'>
        <h2>COMPANY</h2>
        <a>About</a>
        <a>Blog</a>
        <a>FAQ</a>
        <a>Contact</a>
        <a>We're hiring</a>
      </div>
      <div className='location'>

      </div>
      </div>
      <div className='footer-links'>
       <a>Terms Of Use</a>
        <a>Privacy Policy</a>
        <a>Refund Policy</a>
        <a>Risks</a>




      </div>
     
      
    </div>
  )
}

export default Footer