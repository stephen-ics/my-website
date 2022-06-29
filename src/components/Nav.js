import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="flex flex-wrap justify-around items-center bg-blue-900 text-white h-16 text-3xl">
        <Link to="/">
            <h3 className="flex justify-start">About Me</h3>
        </Link>
        <ul className="flex justify-center flex-wrap">
            <Link to='/projects'>
                <li className="nav-Links">Projects</li>
            </Link>
            <Link to='/contacts'>
                <li className="nav-Links">Contacts</li>
            </Link>
        </ul>


    </nav>
  )
}

export default Nav