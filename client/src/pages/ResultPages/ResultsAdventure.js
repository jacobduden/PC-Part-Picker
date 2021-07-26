import React from 'react';
import { Container, Row} from 'react-bootstrap';
import './Results.css';
import ResultCard from '../assets/ResultCard';
const api_url = "https://thingproxy.freeboard.io/fetch/https://api.rawg.io/api/genres?key=e5e83881a81249588c4bcfbe0ad9bc6d";


async function handleResult(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    if(response){
        data = data.results[2].games;
    }
    console.log(data);
    ResultsAdventure(data);

}

handleResult(api_url);

export default function ResultsAdventure(data){
    const image = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Assassin%27s_Creed_Logo.svg/1200px-Assassin%27s_Creed_Logo.svg.png";

    return(
            <section className="games-sect">
            <Container fluid className="games-cont">
                <Container className="games-cont2">
                    <Row className="games-title-row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <h1 className="games-title">Which game were you looking for?</h1>
                    </Row>
                    <Row className="games-card-row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <ResultCard gameName={data[0].name} img={image} tag="adventure"/>
                        <ResultCard gameName={data[1].name} img={image} tag="adventure"/>
                        <ResultCard gameName={data[2].name} img={image} tag="adventure"/>
                        <ResultCard gameName={data[3].name} img={image} tag="adventure"/>
                        <ResultCard gameName={data[4].name} img={image} tag="adventure"/>
                        <ResultCard gameName={data[5].name} img={image} tag="adventure"/>

                    </Row>
                </Container>
            </Container>
        </section>
    );

}