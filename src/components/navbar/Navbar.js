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

       
        <Link 
          className='navbutton' 
          to='/'
          onClick={showSidebar}  
        >
          <li >About Me</li>
        </Link>

        <Link 
          onClick={showSidebar}  
          className='navbutton' 
          to='/resume'>
          <li >Resume</li>
        </Link>

         
        <Link 
          onClick={showSidebar}  
          className='navbutton' 
          rel="noreferrer" 
          target='_blank' 
          to='https://www.linkedin.com/in/ryansul/'>
          <li >LinkedIn</li>
        </Link> 
          
        </div>

        <Link to='#' className='menuIcon'>
         <FiAlignJustify onClick={showSidebar} size={35}/>
       </Link> 
    </div>
  )
}

export default Navbar
