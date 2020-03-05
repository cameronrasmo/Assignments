import React from 'react';
import MyElement from './MyElement.js';
import MapOverArray from './MapOverArray.js';
import ClassBased from './ClassBased.js';
import State from './State.js';
import StateChange from './StateChange.js';
import Forms1 from './Forms1.js';

function App(){
    return (
        <div>
            <MyElement/>
            <MapOverArray/>
            <ClassBased/>
            <State/>
            <StateChange/>
            <Forms1/>
        </div>
    )
}

export default App;