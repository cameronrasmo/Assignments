import React from 'react';

class Forms1 extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});
    }
    render(){
        return(
            <form>
                {/* INPUT TAGS */}
                <input 
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleClick}
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <input 
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleClick}
                />
                
                {/* CHECKBOX */}
                <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly" 
                        onChange={this.handleClick} 
                        checked={this.state.isFriendly}/> 
                    Is Friendly? 
                </label>

                {/* RADIO BUTTONS */}
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="female" 
                        onChange={this.handleClick} 
                        checked={this.state.gender === "female"}/> 
                    Female
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="male" 
                        onChange={this.handleClick} 
                        checked={this.state.gender === "male"}/> 
                    Male
                </label>
                <h2>You are a {this.state.gender}</h2>

                <label>
                    Favorite Color?
                    <select name="favColor" value={this.state.favColor} onChange={this.handleClick}>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    <h2>Your favorite color is {this.state.favColor}</h2>
                </label>
            </form>
        )
    }
}

export default Forms1;