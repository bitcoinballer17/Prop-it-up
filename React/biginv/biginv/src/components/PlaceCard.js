import React from 'react';

const PlaceCard = ({firstName, lastName, age, hairColor}) => {
    const style={
        border: '2px solid purple'
    }
    return(
       <div  style={style} className='card col-3 mx-auto'>
            <h1>{lastName}, {firstName}</h1>
                
            <h5>Age: {age}</h5>

            <h5>Hair Color: {hairColor}</h5>
        </div> 
    );
}   

export default PlaceCard