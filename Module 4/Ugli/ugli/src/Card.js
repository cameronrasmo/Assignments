import React from 'react';

class Card extends React.Component{
    state = {
        editToggle: false,
        id: this.props.count
    }

    edit = () => {
        this.setState({editToggle: true});
    }

    capture = (e) => {
        e.preventDefault();
        this.props.submitMethod(this.state.id, e.target.parentNode[0].value, e.target.parentNode[1].value, e.target.parentNode[2].value);
        e.target.parentNode[0].value = "";
        e.target.parentNode[1].value = "";
        e.target.parentNode[2].value = "";
        this.setState({editToggle: false})
    }

    render(){
        return(
            <div>
                <div onClick={this.edit}>
                    <img src={this.props.imgUrl} alt="img"></img>
                    <h3>{this.props.title}</h3>  
                    <h4>{this.props.description}</h4>
                </div>   
                
                {this.state.editToggle === true ? <div>
                    <h1>edit</h1>
                    <form>
                        <input placeholder="Title" defaultValue={this.props.title}/>
                        <input placeholder="Description" defaultValue={this.props.description}/>
                        <input placeholder="imgurl" defaultValue={this.props.imgUrl}/>
                        <button onClick={this.capture}>submit</button>
                    </form>
                </div> : null}
            </div>
        )
    }
}

export default Card;