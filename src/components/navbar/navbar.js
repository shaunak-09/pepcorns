import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from './logo.png'

function Navbar() {
    function openmenu()
    {
     
      
      if(document.querySelector(".sidebar").style.right==="-650px")
        {
          // document.querySelector(".sidebar").style.display="block"
          document.querySelector(".sidebar").style.right="0px";
          document.querySelector(".line2").style.opacity="0";
        document.querySelector(".line1").style.transform=" rotate(45deg) "
        
        document.querySelector(".line3").style.transform="rotate(-45deg)"

    }
    else {
      
        document.querySelector(".sidebar").style.right="-650px";
          document.querySelector(".line2").style.opacity="1";
        document.querySelector(".line1").style.transform=" rotate(0deg) "
        
        document.querySelector(".line3").style.transform="rotate(0deg)"
     
    }
        // document.querySelector(".line1").style.transform="tranlateY(50px)"

    }
  return (
    <div style={{position:"fixed", zIndex:"2"}}>
      <div className='navbar'>
     <div className='nav-logo'>
      <img src={logo}></img>
     </div>
     <div className='nav-content'>
      <li ><a className='nav-link'href="#">Startups</a></li>
      <li ><a className='nav-link'href="#">Raise Funding</a></li>
      <li ><a className='nav-link'href="#">Learn</a></li>
     </div>
     <div className='nav-login'>
      <Link to="/login"><button className='button1'> Login</button></Link>
      <button className='button2'>Get Started</button>
     </div>
     <div className='ham-menu' onClick={openmenu}>
        <div className='line line1'></div>
        <div className='line line2'></div>
        <div className='line line3'></div>
     </div>
     <div className='sidebar'>
      <li ><a className='nav-link'href="#">Startups</a></li><br/>
      <li ><a className='nav-link'href="#">Raise Funding</a></li><br/>
      <li ><a className='nav-link'href="#">Learn</a></li><br/><br/>
      <Link to="/login"><button className='button1'> Login</button></Link><br/>
      <button className='button2'>Get Started</button><br/>
        
     </div>
    </div>

    </div>
    
  )
}

export default Navbar