import React from 'react';
import ContactCard from './ContactCard.js';

function MyElement(){
    const fName = "cami cam";
    const lName = "adsf";

    const date = new Date();
    const time = date.getHours();
    let ampm = '';
    if(time < 12){
        ampm = 'AM';
    }
    else{
        ampm = 'PM';
    }

    return (
        <div className="container">
            <h1>hai hi i am {`${fName} ${lName}`}</h1>
            <h2>It is currently {`${time % 12} ${ampm}`}</h2>

            <ContactCard contact={{name:"Cameron R", sub:"Coffee Conneiseur", p:"ah yes what is this malarasfdkey" }}/>
        </div>
    )   
}

export default MyElement;