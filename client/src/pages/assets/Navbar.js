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
                        <Link to='/Games' className='nav-links'>
                          Games
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/Wishlist' className='nav-links'>
                          Wishlist
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/Playercard' className='nav-links'>
                          PlayerCard
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