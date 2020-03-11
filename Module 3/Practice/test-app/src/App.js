import React from 'react';
// import MyElement from './MyElement.js';
// import MapOverArray from './MapOverArray.js';
// import ClassBased from './ClassBased.js';
// import State from './State.js';
// import StateChange from './StateChange.js';
// import Forms1 from './Forms1.js';
// import ComponentUpdate from './ComponentUpdate.js';
import ConditionalRendering from './ConditionalRendering.js';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => this.setState({isLoading: false}), 2000);
    }

    render(){
        return(
            <ConditionalRendering isLoading={this.state.isLoading} />
        )
    }
}

export default App;