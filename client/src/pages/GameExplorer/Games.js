import React from 'react';
import { Container, Row, Card} from 'react-bootstrap';
import './Games.css';

export default function Games(){
    return(
        <section className="games-sect">
            <Container fluid className="games-cont">
                <Container className="games-cont2">
                    <Row className="games-title-row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <h1 className="games-title">Choose a Genre!</h1>
                    </Row>
                    <Row className="games-card-row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Container className="game-card-cont">
                            <Card className="game-card">
                                <div className="game-card-img">
                                    <img src="https://d250f2ux8pmbq4.cloudfront.net/uploads/game/logo/91/CivilizationVI-Aspyr-Logo__1_.png"/>
                                </div>
                                <div className="game-card-desc">
                                    <h2>Strategy</h2>
                                    <div className="game-card-opts">
                                        <h3>Systems :</h3>
                                        <span>PC</span>
                                        <span>PS4</span>
                                        <span>XB</span>
                                        <span>SW</span>
                                    </div>
                                    <a href="#">Browse Now</a>
                                </div>
                            </Card>
                        </Container>
                        <Container className="game-card-cont">
                            <Card className="game-card">
                                <div className="game-card-img">
                                    <img src="https://static.wikia.nocookie.net/logopedia/images/d/d4/Super_Mario_%281996-2014%29.svg/revision/latest?cb=20181206060417"/>
                                </div>
                                <div className="game-card-desc">
                                    <h2>Action</h2>
                                    <div className="game-card-opts">
                                        <h3>Systems :</h3>
                                        <span>PC</span>
                                        <span>PS4</span>
                                        <span>XB</span>
                                        <span>SW</span>
                                    </div>
                                    <a href="#">Browse Now</a>
                                </div>
                            </Card>
                        </Container>
                        <Container className="game-card-cont">
                            <Card className="game-card">
                                <div className="game-card-img">
                                    <img src="https://logos-world.net/wp-content/uploads/2021/02/World-of-Warcraft-Logo-2004-present.png"/>
                                </div>
                                <div className="game-card-desc">
                                    <h2>Role-Playing</h2>
                                    <div className="game-card-opts">
                                        <h3>Systems :</h3>
                                        <span>PC</span>
                                        <span>PS4</span>
                                        <span>XB</span>
                                        <span>SW</span>
                                    </div>
                                    <a href="#">Browse Now</a>
                                </div>
                            </Card>
                        </Container>
                        <Container className="game-card-cont">
                            <Card className="game-card">
                                <div className="game-card-img">
                                    <img src="https://i.pinimg.com/originals/f7/64/9c/f7649c881b37806774e5e5e3afe35932.png"/>
                                </div>
                                <div className="game-card-desc">
                                    <h2>Sports and Racing</h2>
                                    <div className="game-card-opts">
                                        <h3>Systems :</h3>
                                        <span>PC</span>
                                        <span>PS4</span>
                                        <span>XB</span>
                                        <span>SW</span>
                                    </div>
                                    <a href="#">Browse Now</a>
                                </div>
                            </Card>
                        </Container>
                        <Container className="game-card-cont">
                            <Card className="game-card">
                                <div className="game-card-img">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Assassin%27s_Creed_Logo.svg/1200px-Assassin%27s_Creed_Logo.svg.png"/>
                                </div>
                                <div className="game-card-desc">
                                    <h2>Adventure</h2>
                                    <div className="game-card-opts">
                                        <h3>Systems :</h3>
                                        <span>PC</span>
                                        <span>PS4</span>
                                        <span>XB</span>
                                        <span>SW</span>
                                    </div>
                                    <a href="#">Browse Now</a>
                                </div>
                            </Card>
                        </Container>
                        <Container className="game-card-cont">
                            <Card className="game-card">
                                <div className="game-card-img">
                                    <img src="https://logos-download.com/wp-content/uploads/2016/12/Sims_logo_green.png"/>
                                </div>
                                <div className="game-card-desc">
                                    <h2>Simulation</h2>
                                    <div className="game-card-opts">
                                        <h3>Systems :</h3>
                                        <span>PC</span>
                                        <span>PS4</span>
                                        <span>XB</span>
                                        <span>SW</span>
                                    </div>
                                    <a href="#">Browse Now</a>
                                </div>
                            </Card>
                        </Container>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}