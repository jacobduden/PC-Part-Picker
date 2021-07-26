import React from 'react';
<<<<<<< HEAD
import { Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css';
import Games from '../GameExplorer/Games.js';

// import { gameRequest } from '../../utils/API';
import { GameAction } from '../../utils/gameQuery';
export default function Dashboard () {
    GameAction();
    return (
        <section className='home-main-sect'>
            <Container fluid className="home-main-cont">
                <Container className="home-main-cont2">
                    <Row className="home-main-row">
                        <Col className="home-main-col">
                            <h1 className="head-main-name" style={{padding:20}}>Looking for new games to play?</h1>
                            <div className='Buttons'>
                            <a role="button" className="btn btn-primary" id='logIN' href='/Login'>LOG IN</a>
                            <a role="button" className="btn btn-primary" id='singUP' href='/Signup'>SIGN UP</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Games/>
            
=======

function Dashboard () {
    return (
        <>
        <section className='desc'>
            <h1> Looking for new games to play?</h1>
            <h3> Here are some popular games! </h3>
>>>>>>> 731fe45a601eb09046455ed6c7dbe3ea06dbb435
        </section>
        </>
    );
}

export default Dashboard;