import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold mt-8 mb-7 text-center text-orange-600'>QUESTION ANSWERS</h2>
             <div className='flex flex-col mx-auto border-blue-500 border-opacity-25 gap-2 mt-4'>
            <div className='border-1 p-5 border-blue-600 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-blue-100'>
                <h2 className='font-bold text-blue-700'>
                1. Difference between authorization and authentication.</h2> 
                <br></br>            
                <p>Authentication means to verify a person or a user. Whereas, authorization means to verify the accessibility of that user over an application, files or etc.</p>
            </div>
            
            <div className='border-1 p-5 border-blue-600 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-blue-100'>
                <h2 className='font-bold text-blue-700'>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <br></br>
                <p>I am using firebase becuase it is easy to use and the SDK provides methods that allow users to sign in with Google, Facebook, Twitter and similar social accounts. Also, you will have access to the firebase database/cloud functionn, UI library and other services.
                Some other options are: Parse: Open Source Backend Platform;
                Back4app: Parse Hosting Platform;
                Kinvey: Mobile Backend as a Service (mBaaS) for the Enterprise;
                Backendless: Mobile Backend and API Services Platform;
                Kuzzle: Backend for web, hybrid, or native mobile apps and IoT projects.
                </p>
            </div>
            <div className='border-1 p-5 border-blue-600 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-blue-100'>
                <h2 className='font-bold text-blue-700'>3. What other services does firebase provide other than authentication?</h2>
                <br></br>
                <p>Some other services provided by firebase are: Cloud Firestore.
                    Cloud Functions.
                    Authentication.
                    Hosting.
                    Cloud Storage.
                    Google Analytics.
                    Predictions.
                    Cloud Messaging and etc.</p>
            </div>
            
        </div>
        </div>
    );
};

export default Blogs;