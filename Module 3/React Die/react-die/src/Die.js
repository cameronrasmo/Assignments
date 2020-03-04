import React from 'react';

class Die extends React.Component{
    constructor(){
        super();
        this.state = {
            clicked: false,
            borderColor: 'black',
            num: 0
        }
        this.clicked = this.clicked.bind(this);
        this.stateCheck = this.stateCheck.bind(this);
    }
    
    clicked(num){
        this.setState(prev => {
            let click = (this.state.clicked === false ? true : false);
            let borderColor = (click ? 'grey' : 'black');
            console.log(this.state.borderColor)
            return{
                clicked: click,
                borderColor: borderColor,
                num: num
            }
        })
    }

    stateCheck(){
        if(this.state.clicked){
            return this.state.num;
        }
        else{
            return this.props.num;
        }
    }

    render(){
        return(
            <div onClick={() => {this.clicked(this.props.num)}} style={{borderColor: this.state.borderColor, color: this.state.borderColor}} className="die">
                <h1>{this.stateCheck()}</h1>
            </div>
        )
    }
}

export default Die;