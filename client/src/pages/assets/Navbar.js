import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbarContainer'>
                    <Link to='/dashboard' className='navbar-logo'>
                        <i className='fab fa-react' /> Game Finder
                    </Link>
                    <ul className='navnav'>
                      <li className='nav-item'>
                        <Link to='/#' className='nav-links'>
                          Home
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/#' className='nav-links'>
                          Hot Releases
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/#' className='nav-links'>
                          Trending
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/contact' className='nav-links'>
                          Most Played
                        </Link>
                      </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;