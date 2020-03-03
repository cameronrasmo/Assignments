import React from 'react';


function Button(props){
    return(
        <div id="button-container">
            <button>{props.type}</button>
        </div>
    )
}       

export default Button;