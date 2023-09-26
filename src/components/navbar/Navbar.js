import React, {useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import  {FiAlignJustify}  from "react-icons/fi";


const Navbar = () => {

  const [sidebar, setSideBar] = useState(false)

  const showSidebar = () => setSideBar(!sidebar)

  const path = window.location.pathname.substring(1)
  const firstLetterUppercasePathName = path.charAt(0).toUpperCase()
  
  return (
    <div className='header'>
      
      <span className='titleText'>Ryan Sullivan - <span className='fullstackTitle'>Fullstack Engineer</span> </span>
      <div className = 'pathNameOnPage'>{firstLetterUppercasePathName + path.slice(1)}</div>
        <div className= {sidebar ? 'navbarActive' :'navbarHidden'}>

          {/* <a href='#aboutMeNavId' onClick={showSidebar}>  */}
          <Link to="" onClick={showSidebar}>
            <li className='navbutton' >About Me</li>
          </Link>
          {/* </a> */}

          {/* <a href='#projectsNavId' onClick={showSidebar}> */}
          <Link to ="/Projects" onClick={showSidebar}>
            <li className='navbutton' >Projects</li>
          {/* </a>   */}
          </Link>

          {/* <a href='#resumeNavId' onClick={showSidebar}> */}
          <Link to="/Resume" onClick={showSidebar}>
            <li id= 'resumeNavMobileId' className='navbutton' >Resume</li>
          {/* </a> */}
          </Link>

         {/* <Link to='/contact' onClick={showSidebar}> 
            <li className = 'navButton'>Contact</li>
          </Link>
          */}
  
          
        </div>

        <Link to='#' className='menuIcon'>
         <FiAlignJustify onClick={showSidebar} size={45}/>
       </Link> 
    </div>
  )
}

export default Navbar
