import React from 'react';
import MyElement from './MyElement.js';
import MapOverArray from './MapOverArray.js';
import ClassBased from './ClassBased.js';
import State from './State.js';
import StateChange from './StateChange.js';

function App(){
    return (
        <div>
            <MyElement/>
            <MapOverArray/>
            <ClassBased/>
            <State/>
            <StateChange/>
        </div>
    )
}

export default App;