import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin/SocialLogin';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    if (error) {
        errorElement = 
                <p className='text-red-600'>Error: {error.message}</p>
    }

    let from = location.state?.from?.pathname || "/checkout";

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const handlePasswordReset = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("email sent");
        })
    }
   
    return (
        <div>
         <h2 className='font-bold text-3xl text-center mb-2 mt-5 text-orange-600 bg-gray-100 underline-offset-3 border-b-2 pt-2 pb-2'>PLEASE LOGIN</h2>
        <div className='flex justify-center container w-50 mx-auto'>
            <form  onSubmit={handleSubmit} className="w-full max-w-lg mt-10 ml-10">
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Email Address
                    </label>
                    <input  ref = {emailRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Email" required></input>
                    <p className="text-gray-600 text-xs italic">We won't share your email address with anyone.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Password
                    </label>
                    <input ref = {passwordRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="Password" required></input>
                    <p className="text-gray-600 text-xs italic">Your password is protected</p>
                    </div>
                </div>

                <button className='bg-blue-300 mt-2 mb-4 hover:bg-orange-400 text-small text-white px-3 py-2 font-bold rounded'>Login</button>
            </form>
        </div>
        <div className='text-center'>
        {errorElement}
        </div>
      
        <p className='text-center'>New to Glam Studio? Register <Link to ="/register" className='text-orange-600 font-bold pe-auto' onClick={navigateRegister}>NOW!</Link></p>
        <button className='text-red-500 font-bold ml-60 pl-80
     flex justify-center' onClick={handlePasswordReset} variant="link">Forget Password?</button>
        <br></br>
        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;