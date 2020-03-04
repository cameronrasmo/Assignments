import React from 'react';

class DiceBox extends React.Component{
    constructor(){
        super();
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.randomNumbers = this.randomNumbers.bind(this);
    }

    randomNumbers(){
        let randArr = [];
        for(let i = 0; i < 5; i++){
            randArr.push(Math.floor(Math.random() * 6));
        };
        this.setState(prev => {
            return{
                num1: randArr[0],
                num2: randArr[1],
                num3: randArr[2],
                num4: randArr[3],
                num5: randArr[4]
            }
        })
    }

    render(){
        return(
            <div id="container">
                <div id="dicebox-container">
                    <h1>{this.state.num1}</h1>
                    <h1>{this.state.num2}</h1>
                    <h1>{this.state.num3}</h1>
                    <h1>{this.state.num4}</h1>
                    <h1>{this.state.num5}</h1>
                </div>
                <button onClick={this.randomNumbers}>Generate Random Numbers</button>
            </div>
        )
    }
}

export default DiceBox;