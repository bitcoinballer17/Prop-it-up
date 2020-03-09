import React from 'react';


const PlaceCard = ({firstName, lastName, age, hairColor,idx,handleClick}) => {
    const style={
        border: '2px solid purple'
    }
    return(
       <div  style={style} className='card col-3 mx-auto'>
            <h1>{lastName}, {firstName}</h1>
             
            <h5>Age: {age}</h5>

            <h5>Hair Color: {hairColor}</h5>
            <button className='btn btn-outline-warning btn-dark col-4 mx-auto' onClick={(e) => handleClick(e,idx)}>Birthday</button>
        </div> 
    );
}   

export default PlaceCard