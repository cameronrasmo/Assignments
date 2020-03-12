import React from 'react';
const Axios = require('axios');

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            bgColor: "white",
            txtColor: "black"
        }
        this.count = 0;
    }

    click = () => {
        Axios.get("http://www.colr.org/json/colors/random/7").then(data => {
            this.setState({bgColor: "#" + data.data.colors[this.count].hex});
        });
        Axios.get("http://www.colr.org/json/colors/random/7").then(data => {
            this.setState({txtColor: "#" + data.data.colors[this.count+1].hex});
        });
    }

    componentDidUpdate(){
        this.bg.current.style.backgroundColor = this.state.bgColor;
        this.txt.current.style.color = this.state.txtColor;
        if(this.count < 5){
            this.count++;
        }
        else{
            this.count = 0; 
            this.setState({bgColor: "white", txtColor: "black"});
        }


    }

    render(){
        return(
            <div id="container" ref={this.bg = React.createRef()}>
                <div id="header"><h1 ref={this.txt = React.createRef()}>{"Random Color Component"}</h1></div>

                <button onClick={this.click}>Switch Color</button>
            </div>
        )
    }
}

export default App;