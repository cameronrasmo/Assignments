import React from 'react';

function Location(props){
    let priceIcon = "";
    if(props.price <= 500){
        priceIcon = "$";
    }
    else if(props.price >= 500 && props.price <= 1000){
        priceIcon = "$$";
    }
    else if(props.price >= 1000){
        priceIcon = "$$$";
    }
    return(
        <div id={props.place} className="location-container">
            <h1 className="location-header">{props.place}</h1>
            <div className="img-container"><img src={props.imgurl} alt={props.place}></img></div>
            <div className="price-icon">{priceIcon}</div>
            <div className="time-to-go">BEST TIME TO GO - {props.timeToGo}</div>
        </div>
    )
}

export default Location;