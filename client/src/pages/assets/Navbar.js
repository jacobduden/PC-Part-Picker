import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbarContainer'>
                    <Link to='/dashboard' className='navbar-logo'>
                        <i className='fab fa-react' /> PC-Part-Picker
                    </Link>
                    <ul className='navnav'>
                      <li className='nav-item'>
                        <Link to='/#' className='nav-links'>
                          #
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/#' className='nav-links'>
                          #
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/#' className='nav-links'>
                          #
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