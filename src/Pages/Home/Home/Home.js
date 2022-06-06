import React from 'react';
import Services from '../Services/Services';
import img1 from '../../../images/spa-accessories-white-textured-table-close-up (1).jpg'
import img2 from '../../../images/haris-hair-salon-fulham-road-london.jpg'

const Home = () => {
    return (
        <div>
            <div className="rounded overflow-hidden">
               <div className="content-center px-5">
                  <p className="font-bold text-center text-2xl pt-4 overline text-blue-200"><small>Feel Beautiful with</small></p>
                  <h1 className="font-bold text-5xl text-center mb-4 text-orange-600">GLAM STUDIO</h1>
                </div>
                <div>
                 <img className="w-30 h-3/4 mr-2" src={img1} alt=""/> 
                </div>
            </div>
            <Services></Services>
            <div className=''>
              <h2 className='text-4xl font-bold mt-12 pt-8 mb-7 text-center text-orange-600'>SUCCESS RATE</h2>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-36 gap-10 mb-10 w-3/4'>
                  <div className="border-2 bg-orange-100 text-center pb-3">
                    <h2 className='text-4xl font-bold text-blue-400'>220</h2>
                    <p className='text-2xl font-bold text-orange-500'>Happy Customers</p>
                  </div>
                  <div className="border-2 bg-gray-100 text-center pb-3">
                    <h2 className='text-4xl font-bold text-blue-400'>310</h2>
                    <p  className='text-2xl font-bold text-orange-500'>Services</p>
                  </div>
                  <div className="border-2 bg-orange-100 text-center pb-3">
                    <h2 className='text-4xl font-bold text-blue-400'>27,500</h2>
                    <p  className='text-2xl font-bold text-orange-500'>Revenue</p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Home;