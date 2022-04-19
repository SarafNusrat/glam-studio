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
            <div>
              <h2 className='text-4xl font-bold mt-6 pt-6 mb-7 text-center text-orange-600'>SUCCESS STORY</h2>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-10 w-3/4'>
                  <div className="border-2 bg-orange-100 text-center pb-3">
                    <h2 className='text-4xl bolder text-orange-500'>220</h2>
                    <p>Happy Customers</p>
                  </div>
                  <div className="border-2 bg-gray-100 text-center pb-3">
                    <h2 className='text-4xl bolder text-orange-500'>310</h2>
                    <p>Services</p>
                  </div>
                  <div className="border-2 bg-orange-100 text-center pb-3">
                    <h2 className='text-4xl bolder text-orange-500'>27,500</h2>
                    <p>Revenue</p>
                  </div>
                </div>
            </div>
            
            <div className="max-w-sm w-50% lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <img className='w-full' src={img2} alt=''></img>
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                   <div className="mb-8">
                      <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                      <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;