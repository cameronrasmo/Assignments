import React from 'react';
import vs from './vacationSpots.js';

function Sidebar(){
    const listedNames = vs.map(location => 
        <a className="location-item" href={`#${location.place}`}><h4>{location.place}</h4></a>
    )
    return(
        <div id="sidebar-container">
            <div id="sidebar-logo-container"><i className="material-icons">terrain</i></div>
            <div id="options-container">
                {listedNames}
            </div>
        </div>
    )
}

export default Sidebar;