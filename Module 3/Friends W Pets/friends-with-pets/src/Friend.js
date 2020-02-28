import React from 'react';

function Friend(props){
    return(
        <div>
            <h1 className="friend-header">{props.fName}, age {props.fAge}</h1>
        </div>
    )
}

export default Friend;