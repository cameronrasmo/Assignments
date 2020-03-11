import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            colorCount: 0,
            color: ["blue", "red", "yellow", "black"]
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1});

    }

    render(){
        return(
            <div>
                <h2 ref={this.countRef = React.createRef()}>{this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default App;