import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const CheckOut = () => {
    // const [user] = useAuthState(auth);
    // const navigate = useNavigate();
    // const location = useLocation();

    // if (user){
    //     return <Navigate to="/checkout" state ={{ form: location}} replace />;
    // }

    return (
        <div>
            <h2 className='text-center pt-4 text-3xl text-orange-600 font-bold'>Please make the payment.</h2>
            <p></p>
        </div>
    );
};

export default CheckOut;