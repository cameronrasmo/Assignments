import React from 'react';
import { withToggler } from './Toggler.js';

function Toggle1(props){
    return(
        <div>
            <h1>{props.switch ? "YOu nasty motherfucker" : "You like to ruin lives dont you"}</h1>
            <button onClick={props.toggle}>Clickity clack?</button>
        </div>
    )
}

export default withToggler(Toggle1);