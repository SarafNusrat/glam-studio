import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className='mt-20 ms-10 me-10'>
            <h2 className='text-4xl font-bold mb-7 text-center text-orange-600'>SERVICES</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-10'>
            {
                services.map(service => <Service
                   key = {service.id}
                   service = {service}
                ></Service>)
            } 
            </div>     
        </div>
    );
};

export default Services;