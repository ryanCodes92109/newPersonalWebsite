import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/resume'>
            <li>Resume</li>
        </Link>
    </div>
  )
}

export default Navbar
