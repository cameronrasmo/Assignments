import React from 'react';

class App extends React.Component{
    render(){
        return(
            <div id="card-container">
                <div id="image-section">
                    <img src={this.props.imgSrc} alt="img"></img>
                </div>
                <div id="name-section">
                    <h5>so essentially we gotta kill</h5>
                    <h1>{this.props.name}</h1>
                </div>
            </div>
        )
    }
}

export default App;