import React from 'react';
import Services from '../Services/Services';
import img1 from '../../../images/spa-accessories-white-textured-table-close-up (1).jpg'

const Home = () => {
    return (
        <div>
            <div className="rounded overflow-hidden">
               <div className="content-center px-5">
                  <h1 className="font-bold text-4xl pt-2 text-blue-200"><small>Feel Beautiful with</small></h1>
                  <h1 className="font-bold text-5xl mt-4 mb-2 text-orange-600">GLAM STUDIO</h1>
                  <p className="text-gray-700 text-base ml-4 pr-16 pl-16 mt-6">
                  Pamper yourself with customised services at your doorstep.
                    </p>
                </div>
                <div>
                 <img className="w-30 h-3/4 mr-2" src={img1} alt=""/> 
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;