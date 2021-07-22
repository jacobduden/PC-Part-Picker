import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css';
import Games from '../GameExplorer/Games.js';

export default function Dashboard () {
    return (
        <section className='home-main-sect'>
            <Container fluid className="home-main-cont">
                <Container className="home-main-cont2">
                    <Row className="home-main-row">
                        <Col className="home-main-col">
                            <h1 className="head-main-name" style={{padding:20}}>Looking for new games to play?</h1>
                            <div className='Buttons'>
                            <a role="button" className="btn btn-primary" id='logIN' href='/Login'>LOG IN</a>
                            <a role="button" className="btn btn-primary" id='singUP'href='/Login'>SIGN UP</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Games/>
            
        </section>
    );
}