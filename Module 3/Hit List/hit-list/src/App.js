import React from 'react';
import Card from './Card.js';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            list: []
        }
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json").then(response => response.json()).then(data => this.setState({list: data, loading: false}));
        window.addEventListener("scroll", () => {
            if((window.scrollY > 1000 && window.scrollY < 2120) || (window.scrollY > 6500)){
                this.headerRef.current.style.color = "#0f0f0f";
            }
            else{
                this.headerRef.current.style.color = "#f2f2f2"
            }
        })
    }

    render(){
        const cards = this.state.list.map(item => 
            <Card name={item.name} imgSrc={item.image}/>
        )
        
        return(
            <div id="container">
                <h3 id="loader">{this.state.loading ? "Loading..." : null}</h3>
                <h1 ref={this.headerRef = React.createRef()}id="header">Hit List</h1>
                {cards}
            </div>
        )
    }
}

export default App;