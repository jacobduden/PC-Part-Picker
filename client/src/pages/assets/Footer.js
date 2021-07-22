import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className='footerContainer'>
      <Container fluid className='footerLinks'>
        <Row>
        <Col className='footerLinkCol'>
          <Link to='/' className='mediaLogo position-absolute bottom-0 start-0'>
            Game Finder <i className='fab gamepad' />
          </Link>
        </Col>
        <Col className='footerWrapper'>
          <Row className='footerWrapperRow'>
            <Col className='footerLinkItems'>
              <h2>About Us</h2>
              <Link to='/signUp'>How it works</Link><br/>
              <Link to='/PrivacyPolicy'>Privacy Policy</Link>
            </Col>
            <Col className='footerLinkItems'>
              <h2>Contact Us</h2>
              <Link to='/Contact'>Contact</Link><br/>
              <Link to='/Contact'>Support</Link>
            </Col>
          </Row>
        </Col>
        <Col className='footerLinkCC'>
          <small className='copyRight'>Game Finder © 2021</small>
        </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;