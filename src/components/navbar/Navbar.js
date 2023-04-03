import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  
  return (
    <div className='header'>
      
      <span className='titleText'>Ryan Sullivan - <span className='fullstackTitle'>Fullstack Engineer</span></span>
        <div className='navbar'>
          <Link to='/'>
            <li className='navbutton'>About Me</li>
          </Link>

          {/* <Link to='/projects'>
            <li className='navbutton'>Projects</li>
          </Link> */}

          <Link to='/resume'>
            <li className='navbutton'>Resume</li>
          </Link>

          <Link target='_blank' to='https://www.linkedin.com/in/ryansul/'>
            <li className='navbutton'>LinkedIn</li>
          </Link>
        </div>
    </div>
  )
}

export default Navbar
