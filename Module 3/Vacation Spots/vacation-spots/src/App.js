import React from 'react';
import Sidebar from './Sidebar.js';
import Location from './Location.js';
import VS from './vacationSpots.js';

function App(){
    const locations = VS.map(location => 
        <Location place={location.place} price={location.price} timeToGo={location.timeToGo} imgurl={location.imgurl}/>
    )
    return (
        <div id="container">
            <Sidebar/>
            {locations}
        </div>
        )
}

export default App;