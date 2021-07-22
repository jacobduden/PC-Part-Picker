import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './UnderConst.css';

export default function UnderConst(){
    return(
        <section className="const-sect">
            <Container className="const-cont">
                <Container className="const-cont2">
                    <Row className="const-row">
                        <Col className="const-col">
                            <h1 className="const-title">PAGE UNDER CONSTRUCTION:</h1>
                            <h3 className="const-desc">Please come back at a later time to use this page!</h3>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}