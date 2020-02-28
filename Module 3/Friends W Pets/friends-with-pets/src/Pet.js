import React from 'react';

function Pet(props){
    const petStats = props.pets.map(pet => 
        <div>
            <h3 className="pet-name"><strong>Name:</strong> {pet.name}</h3>
            <h4 className="pet-breed"><strong>Breed:</strong> {pet.breed}</h4>
            <hr/>
        </div>
        )
    return(
        <div>
            <h2 className="pet-header">pets</h2>
            {petStats}
        </div>
    )
}

export default Pet;