import React from 'react';
import { withToggler } from './Toggler.js';

function Toggle2(props){
    return(
        <div>
            <h2>Am I Gay? : {props.switch ? "Yes" : "No"}</h2>
            <button onClick={props.toggle}>Check it out</button>
        </div>
    )
}

export default withToggler(Toggle2);