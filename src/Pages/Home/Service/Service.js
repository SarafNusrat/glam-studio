import React from 'react';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div>
            <img src={img} alt=""></img>
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;