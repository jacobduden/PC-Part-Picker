import React from 'react';
import { Container, Card} from 'react-bootstrap';
import './ResultCard.css';

export default function ResultCard(props){
    return(
        <Container className="result-card-cont">
            <Card className="result-card">
                <div className="result-card-img">
                    <img src={props.img} alt={props.tag}/>
                </div>
                <div className="result-card-desc">
                    <h2>{props.gameName}</h2>
                    <div className="result-card-opts">
                        <h3>Seller Name:</h3>
                        <h4>Price:</h4>
                        <h5>Description:</h5>
                    </div>
                    <a>Browse Now</a>
                </div>
            </Card>
        </Container>
    );
}