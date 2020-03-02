import React from 'react';
import bigbooty from './bigbooty.js';

class State extends React.Component{
    constructor(){
        super();
        this.state = {
            theBooties: bigbooty
        }
    }
    render(){
        const items = this.state.theBooties.map(booty => 
            <div>
                <h5>Please welcome {booty.name}</h5>
                <h7>Their booty is {booty.booty}</h7>
            </div>
            )
        return(
            <div>
                <h4>welcome to bootytest, the hottest new game show</h4>
                {items}
            </div>
        )
    }
}

export default State;