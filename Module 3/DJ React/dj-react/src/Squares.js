import React from 'react';
import Square from './Square.js'

class Squares extends React.Component{
    constructor(){
        super();
        this.state = {
            color: ["white", "white", "white", "white"]
        }

        this.change = this.change.bind(this);
    }

    change(color, startIdx = 0, endIdx){
        this.setState(prev => {
            let updated = prev.color.map(color => color);
            for(let i = startIdx; i < endIdx; i++){
                if(updated[i] !== color){
                    updated[i] = color;
                }
                else if(updated[i] === color){
                    updated[i] = "white";
                }
            }
            return{
                color: updated
            }
        })
    }

    render(){
        return(
            <div>
                <div id="squares-container">    
                    <Square color={this.state.color[0]}/>
                    <Square color={this.state.color[1]}/>
                    <Square color={this.state.color[2]}/>
                    <Square color={this.state.color[3]}/>
                </div>
                <div id="buttons-container">
                    <button onClick={() => this.change("black", 0, 4)}>Black/White</button>
                    <button onClick={() => this.change("purple", 0, 2)}>Top Half Purple</button>
                    <button onClick={() => this.change("blue", 2, 3)}>Bottom Left Blue</button>
                    <button onClick={() => this.change("blue", 3, 4)}>Bottom Right Blue</button>

                    <button onClick={() => this.change("green", 0, 1)}>Top Left Green</button>
                    <button onClick={() => this.change("red", 1, 2)}>Top Right Red</button>
                    <button onClick={() => this.change("purple", 2, 3)}>Bottom Left Purple</button>
                    <button onClick={() => this.change("pink", 3, 4)}>Bottom Right Pink</button>
                </div>
            </div>
        )
    }
}

export default Squares;