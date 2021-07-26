import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
<<<<<<< HEAD
            <Navbar fixed="top" expand="md" expanded={expand} className={navColour ? "sticky" : "navbar"}>
                <Container>
                    <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" onClick={()=>{ updateExpanded(expand ? false : "expanded");}}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-center" style={{ flex: 1}} defaultActiveKey="#home">
                            <LinkContainer to="/games">
                                <Nav.Link onClick={() => updateExpanded(false)}>Games</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/playercard">
                                <Nav.Link onClick={() => updateExpanded(false)}>Player Card</Nav.Link>
                            </LinkContainer>
							<LinkContainer to="/">
								<Nav.Item className="nav-brand">
									<Navbar.Brand className="mx-auto">Game Finder</Navbar.Brand>
								</Nav.Item>
							</LinkContainer>
                            <LinkContainer to="/wishlist">
                                <Nav.Link onClick={() => updateExpanded(false)}>Wishlist</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">    
                                <Nav.Link onClick={() => updateExpanded(false)}>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
=======
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
>>>>>>> 731fe45a601eb09046455ed6c7dbe3ea06dbb435
