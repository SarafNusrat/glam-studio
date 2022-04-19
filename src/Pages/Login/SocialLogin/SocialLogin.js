import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import img1 from '../../../images/download.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = 
                <p className='text-red-600'>Error: {error.message}</p>
    }

    if(user) {
        navigate('/');
    }

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col w-50'>
                <p className='mt-2 text-center pb-3'>or</p>
                {errorElement}
                <button onClick={() => {
                    signInWithGoogle()} }
                    className='flex border-2 p-2'>
                    <img className='mr-2 pr-0' style={{width: '30px'}} src={img1} alt=""/>
                    <p>Google Sign In</p>
                </button>
            </div>
 
        </div>
    );
};

export default SocialLogin;
