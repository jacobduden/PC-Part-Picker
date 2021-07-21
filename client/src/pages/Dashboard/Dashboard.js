import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css';

function Dashboard () {
    return (
        <>
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
            
            
            <Container fluid className="home-bot-cont">
                    <Container className="home-bot-cont2">
                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                            <h1 className="home-bot--title">Browse a few genres!</h1>
                        </Row>
                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                            {/* <Col className="home-bot-card">
                                <GameCard img="" title="" url="" />
                            </Col>
                            <Col className="home-bot-card">
                                <GameCard img="" title="" url="" />
                            </Col>  
                            <Col className="home-bot-card">
                                <GameCard img="" title="" url="" />
                            </Col>  
                            <Col className="home-bot-card">
                                <GameCard img="" title="" url="" />
                            </Col>  
                            <Col className="home-bot-card">
                                <GameCard img="" title="" url="" />
                            </Col>  
                            <Col className="home-bot-card">
                                <GameCard img="" title="" url="" />
                            </Col>   */}
                        </Row>
                    </Container>
            </Container>
        </section>
        </>
    );
}

export default Dashboard;