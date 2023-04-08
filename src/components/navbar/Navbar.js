import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FiAlignJustify } from "react-icons/fi";


const Navbar = () => {

  const [sidebar, setSideBar] = useState(false)

const showSidebar = () => setSideBar(!sidebar)
  
  return (
    <div className='header'>
      
      <span className='titleText'>Ryan Sullivan - <span className='fullstackTitle'>Fullstack Engineer</span></span>
        <div className= {sidebar ? 'navbarActive' :'navbarHidden'}>

       
        <Link to='/'>
          <li className='navbutton'>About Me</li>
        </Link>

        <Link to='/resume'>
          <li className='navbutton'>Resume</li>
        </Link>

         
        <Link target='_blank' to='https://www.linkedin.com/in/ryansul/'>
          <li className='navbutton'>LinkedIn</li>
        </Link> 
          
        </div>

        <Link to='#' className='menuIcon'>
         <FiAlignJustify onClick={showSidebar} size={25}/>
       </Link> 
    </div>
  )
}

export default Navbar
