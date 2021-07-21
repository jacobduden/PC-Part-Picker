import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import {LinkContainer} from "react-router-bootstrap";
import './Navbar.css';

export default function NavBar(){

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    function scrollHandler() {
        if (window.scrollY >= 20) {updateNavbar(true);} 
        else {updateNavbar(false);}
    }
    
    window.addEventListener("scroll", scrollHandler);

    return (
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
								<Nav.Item>
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