import React from 'react';

class StateChange extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prev => {
            return {
                count: prev.count + 5
            }
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>CLICKITY CLACK DONT CLACK BACK</button>
            </div>
        )
    }
}

export default StateChange;