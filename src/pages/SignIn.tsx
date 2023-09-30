import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target!.value,
    }));
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img
            src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2V5c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='key'
            className='w-full rounded-2xl'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input
              className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6'
              type='email'
              id='email'
              placeholder='Email address'
              value={email}
              onChange={onChange}
            />
            <div className='relative mb-6'>
              <input
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Password'
                value={password}
                onChange={onChange}
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>
                Don't have an account?{' '}
                <Link
                  to='/sign-up'
                  className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to='/forgot-password'
                  className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-7 py-3 
            text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 
            transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'
            >
              Sign in
            </button>
            <div
              className='flex my-4 items-center 
          before:border-t before:flex-1 before:border-gray-300
          after:border-t after:flex-1 after:border-gray-300'
            >
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
