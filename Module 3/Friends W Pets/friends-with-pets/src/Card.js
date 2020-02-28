import React from 'react';
import Friend from './Friend.js';
import Pet from './Pet.js';

function Cards(props){
    return(
        <div id="card-container">
            <Friend fName={props.fName} fAge={props.fAge}/>
            <Pet pets={props.pets}/>
        </div>
    )
}

export default Cards;