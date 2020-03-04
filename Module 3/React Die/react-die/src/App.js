import React from 'react';
import DiceBox from './DiceBox.js';
import Die from './Die.js';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
            count: 0
        }
        this.randomNumbers = this.randomNumbers.bind(this);
    }
    
    randomNumbers(){
        if(this.state.count < 3){
            let randArr = [];
            for(let i = 0; i < 5; i++){
                randArr.push(Math.floor(Math.random() * 6));
            }
            this.setState(prev => {
                return{
                    num1: randArr[0],
                    num2: randArr[1],
                    num3: randArr[2],
                    num4: randArr[3],
                    num5: randArr[4],
                    count: prev.count + 1
                }
            })
        }
        else{
            this.setState(prev => {
                return{
                    num1: 0,
                    num2: 0,
                    num3: 0,
                    num4: 0,
                    num5: 0,
                    count: 0
                }
            }) 
        }
    }

    render(){
        return(
            <div>
                <h1 id="header">React Die</h1>
                <h3 id="sub-header">Click the boxes on the right to freeze the value</h3>
                <DiceBox/>
                <Die num={this.state.num1}/>
                <Die num={this.state.num2}/>
                <Die num={this.state.num3}/>
                <Die num={this.state.num4}/>
                <Die num={this.state.num5}/>
                <button id="die-button" onClick={this.randomNumbers}>Generate Random Numbers</button>
            </div>
        )
    }
}

export default App;