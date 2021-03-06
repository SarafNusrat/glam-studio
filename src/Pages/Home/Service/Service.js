import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div id="service" className='border-2 border-indigo-100'>
            <img className='w-full' src={img} alt=""></img>
            <div className='text-center'>
                <h2 className='mt-3 font-bold text-1xl text-blue-400'>{name}</h2>
                <p className='pt-2 underline'>{price}</p>
                <p><small>{description}</small></p>
                <Link to="/checkOut">
                <button className='bg-yellow-300 mt-2 mb-4 hover:bg-orange-500 text-small text-white px-3 rounded-full'>Book Now</button>
                </Link>
                
            </div> 
        </div>
    );
};

export default Service;