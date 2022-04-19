import React from 'react';
import img from '../../../images/404-error-with-broken-robot-pana.svg';

const NotFound = () => {
    return (
        <div>
            <img className='w-full' src={img} alt=""/>
        </div>
    );
};

export default NotFound;