import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            typed: "Name Entry",
            names: ["James", "Bobert", "Grunthilda"]
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitName = this.submitName.bind(this);
    }
    handleChange(event){
        const{name, value} = event.target;
        this.setState({[name]: value});
    }
    submitName(event){
        const updated = [];
        this.setState(prev => {
            if(this.state.names !== []){
                prev.names.map(item => {
                    updated.push(item)
                })
            }
            if(this.state.typed === "Name Entry" || this.state.typed === "" || this.state.typed === "Pls type"){
                this.setState({typed: "Pls type"})
            }
            else{
                updated.push(this.state.typed)
            }
            return{
                names: updated
            }
        })
    }
    render(){
        const names = this.state.names.map(item => 
            <li>{item}</li>
            )
        return(
            <div id="container">
                <h1>{this.state.typed}</h1>
                <form>
                    <input id="input" placeholder="Enter a name" name="typed" onChange={this.handleChange}/>
                    <input id="submit-name" type="button" value="Submit name" onClick={this.submitName}/>
                </form>
                <ul>
                    {names}
                </ul>
            </div>
        )
    }
}

export default Form;