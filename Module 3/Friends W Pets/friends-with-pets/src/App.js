import React from 'react';
import Card from './Card.js';
import fwp from './friendsWithPets.js';

function App(){
    const cards = fwp.map(friend => 
        <Card fName={friend.name} fAge={friend.age} pets={friend.pets}/>
        );
    return (
        <div>
            {cards}
        </div>
    )
}

export default App;