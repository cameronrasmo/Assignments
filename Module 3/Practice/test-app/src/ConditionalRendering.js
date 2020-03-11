import React from 'react';

function ConditionalRendering(props){
    return props.isLoading ? <h1>loading</h1> : <h1>hi yes i am loaded now hell yeah</h1>
}

export default ConditionalRendering;