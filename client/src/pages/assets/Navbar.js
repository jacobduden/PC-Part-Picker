import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbarContainer'>
                    <Link to='/dashboard' className='navbar-logo'>
                        <i className='fab fa-react' /> Portfolio
                    </Link>
                    <ul className='navnav'>
                      <li className='nav-item'>
                        <Link to='/aboutme' className='nav-links'>
                          About me
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/projects' className='nav-links'>
                          Projects
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/myresume' className='nav-links'>
                          Resume
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/contact' className='nav-links'>
                          Contact
                        </Link>
                      </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;