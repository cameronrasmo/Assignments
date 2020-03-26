import React from 'react';

class Toggler extends React.Component{
    state = {
        on: true
    }

    toggle = () => {
        this.setState(prev => {return{on: !prev.on}})
    }

    render(props){
        const {component: C} = this.props
        return(
            <C toggle={this.toggle} switch={this.state.on} {...props}/>
        )
    }
}

export function withToggler(component){
    return function(props){
        return(
            <Toggler component={component} {...props}/>
        )
    }
}