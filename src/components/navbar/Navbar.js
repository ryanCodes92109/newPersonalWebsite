import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import  {FiAlignJustify}  from "react-icons/fi";


const Navbar = () => {

  const [sidebar, setSideBar] = useState(false)

  const showSidebar = () => setSideBar(!sidebar)
  
  return (
    <div className='header'>
      
      <span className='titleText'>Ryan Sullivan - <span className='fullstackTitle'>Fullstack Engineer</span></span>
        <div className= {sidebar ? 'navbarActive' :'navbarHidden'}>

          <a href='#aboutMeNavId' onClick={showSidebar}> 
            <li className='navbutton' >About Me</li>
          </a>

          <a href='#projectsNavId' onClick={showSidebar}>
            <li className='navbutton' >Projects</li>
          </a>  

          <a href='#resumeNavId' onClick={showSidebar}>
            <li id= 'resumeNavMobileId' className='navbutton' >Resume</li>
          </a>
         
          <a href='#contactNavId' onClick={showSidebar}>
            <li className='navbutton' >Contact</li>
          </a> 
          
        </div>

        <Link to='#' className='menuIcon'>
         <FiAlignJustify onClick={showSidebar} size={35}/>
       </Link> 
    </div>
  )
}

export default Navbar
