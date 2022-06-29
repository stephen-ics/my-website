import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="flex flex-wrap justify-around items-center h-10 bg-blue-900 text-white h-16 text-3xl">
        <Link to="/">
            <h3 className="flex justify-start">Logo</h3>
        </Link>
        <ul className="flex justify-center flex-wrap">
            <Link to='/about'>
                <li className="nav-Links">About Me</li>
            </Link>
            <Link to='/experience'>
                <li className="nav-Links">Experience</li>
            </Link>
        </ul>


    </nav>
  )
}

export default Nav