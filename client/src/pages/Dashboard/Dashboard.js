import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css';
import Games from '../Games/Games.js';

export default function Dashboard () {
    return (
        <section className='home-main-sect'>
            <Container fluid className="home-main-cont">
                <Container className="home-main-cont2">
                    <Row className="home-main-row">
                        <Col className="home-main-col">
                            <h1 className="head-main-name" style={{padding:20}}>Looking for new games to play?</h1>
                            <h3 className="head-main-desc" style={{padding:50, textAlign: 'center'}}>Here are some popular games!</h3>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Games/>
            
        </section>
    );
}