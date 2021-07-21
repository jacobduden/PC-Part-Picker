import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import {LinkContainer} from "react-router-bootstrap";


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
                            <LinkContainer to="/Trending">
                                <Nav.Link onClick={() => updateExpanded(false)}>Trending</Nav.Link>
                            </LinkContainer>a
                            <LinkContainer to="/HotReleases">
                                <Nav.Link onClick={() => updateExpanded(false)}>Hot Releases</Nav.Link>
                            </LinkContainer>
							<LinkContainer to="/">
								<Nav.Item>
									<Navbar.Brand className="mx-auto">Game Finder</Navbar.Brand>
								</Nav.Item>
							</LinkContainer>
                            <LinkContainer to="/Mostplayed">
                                <Nav.Link onClick={() => updateExpanded(false)}>Most Played</Nav.Link>
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