import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { checkValidateData } from '../utils/validate';

const Signup = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message || !email.current.value || !password.current.value) {
      return;
    }

    // Sign in or sign up
    if (!isSignInForm) {
      // Sign up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // Redirect to the desired page
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "--" + errorMessage);
        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // Redirect to the desired page
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "--" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className='bg-black'></div>
      <form onSubmit={(e) => e.preventDefault()} className='bg-black rounded-lg absolute p-12 w-full my-16 mx-auto right-0 left-0 text-white'>
        <img className='w-24 mx-auto' src={logo} alt="img" />
        <p className='text-electric p-2 m-0 '>We are Electric</p>

        <input type='text' placeholder='E mail ' className='p-4 login-email rounded-3xl my-4 w-full ' ref={email}></input>
        <input type='password' placeholder='Password' className='login-pass rounded-3xl p-4 my-4 w-full' ref={password}></input>

        <p className='text-green-800 font-semibold text-lg py-2'>{errorMessage}</p>

        <button className='p-4 my-6 login-btn w-full rounded-full' onClick={handleButtonClick}>
          {isSignInForm ? "Login" : "Sign up"}
        </button>

        <p className='text-green-800 text-center font-semibold'>Forgot Password?</p>

        <p className='py-4 cursor-pointer text-green-800' onClick={toggleSignInForm}>
          {isSignInForm ? "New to GreendZine? Sign up now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Signup;