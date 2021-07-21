import React from 'react';

 export default function GameCard(props) {
    return(
        <div className="gamecard-outer">
            <a className="gamecard-link" href={props.url} target="_blank" rel="noreferrer">
                <figure className="gamecard-title" data-catagory={props.title}>
                    <img className="gamecard-img" src={props.img} alt=""/>
                    <figcaption>{props.bio}</figcaption>
                </figure>
            </a>
        </div>
    );
}