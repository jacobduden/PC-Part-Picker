import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbarContainer'>
                    <Link to='/dashboard' className='navbar-logo'>
                        <i className='fab steam-square' /> Steam Overlook
                    </Link>
                    <ul className='navnav'>
                      <li className='nav-item'>
                        <Link to='/HotReleases' className='nav-links'>
                          Hot Releases
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/Trending' className='nav-links'>
                          Trending
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/Mostplayed' className='nav-links'>
                          Most Played
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/Contact' className='nav-links'>
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