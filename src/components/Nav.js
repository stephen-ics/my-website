import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="flex flex-wrap justify-around items-center bg-blue-900 text-white text-3xl">
        <Link to="/">
            <h3 className="hover:bg-blue-300 duration-200 delay-100 transition-all 
            flex justify-start">About Me</h3>
        </Link>
        <ul className="flex justify-center flex-wrap">
            <Link to='/projects'>
                <li className="hover:bg-blue-300 transition-color duration-200 delay-100
                 transition-all nav-Links">Projects</li>
            </Link>
            <Link to='/contacts'>
                <li className="hover:bg-blue-300 duration-200 delay-100
                 transition-all 
                nav-Links">Contacts</li>
            </Link>
        </ul>


    </nav>
  )
}

export default Nav