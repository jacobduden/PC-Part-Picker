import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footerContainer'>
      <div class='footerLinks'>
        <div className='footerWrapper'>
          <div class='footerLinkItems'>
            <h2>About Us</h2>
            <Link to='/signUp'>How it works</Link>
            <Link to='/PrivacyPolicy'>Privacy Policy</Link>
          </div>
          <div class='footerLinkItems'>
            <h2>Contact Us</h2>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Contact'>Support</Link>
          </div>
        </div>
      </div>
      <section class='media'>
        <div class='mediaWrap'>
            <Link to='/' className='mediaLogo'>
              Game Finder
              <i class='fab gamepad' />
            </Link>
          <small class='copyRight'>Game Finder © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;