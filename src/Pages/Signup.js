import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='div8 w-full h-screen'>
        <img
          className='img_sign1 hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='overlay1 bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='div9 fixed w-full px-4 py-24 z-50'>
          <div className='div10 max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='div11 max-w-[320px] mx-auto py-16'>
              <h1 className='text_signup text-3xl font-bold'>Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className='form1 w-full flex flex-col py-4'
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='email p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='password p-3 my-2 bg-gray-700 rouded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button type='submit' className='btnsignup1 bg-red-600 py-3 my-6 rounded font-bold'>
                  Sign Up
                </button>
                <div className='div12 flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='remember mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='already py-8'>
                  <span className='already1 text-gray-600'>
                    Already subscribed to Netflix?
                  </span>{' '}
                  <Link to='/login'>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;