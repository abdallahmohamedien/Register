import React from 'react'
import ArrowLeft from '../images/left.svg'
import Logo from '../images/logo_black.svg'
import DownLogo from '../images/logo-defaukt.svg'
const Login = () => {
  return (
    <div className='grid grid-col-1 sm:grid-cols-3 md:h-screen h-2'>
      <div className='bg-[#84E1D9]  md:w-10/12'>
        <div className='flex ml-10 mb-4 mt-4'>
          <a href='a'><img src={ ArrowLeft } alt="arrowleft" className='mt-4 mr-5' /></a>
          <a href='a'><img src={ Logo } alt="" className='ml-12' width={70} /></a>
        </div>
        <div className='px-4 my-11 md:block hidden'>
          <h1 className=' text-4xl font-bold mt-72 px-4 items-crnter justify-center'>Make your job search more powerful.</h1>
        </div>
      </div>
      <div className='ml-4 md:w-max md:ml-0 bg-[ #FFFFFF] mt-8 pr-4'>
        <div className=''>
          <h1 className='text-4xl font-bold mt-4 '>Success!</h1>
          <p className='text-gray-500 mt-4'>We have successfully created your new account. We have sent an activation mail to <br /> activate it. It should arrive in a couple of minutes.</p>
        </div>
        <div>
            <div className='bg-[#13BFB3] hover:bg-[#0ca69b] shadow-lg md:w-96 font-medium mt-4 mr-2 h-11 rounded-lg text-sm py-3'>
              <a href="lo" className='flex justify-center rounded-lg text-sm text-white font-semibold '>Resend the verification email</a>
            </div>
            <p className='mt-4'>  Already have an account?  <a href='s' className='text-[#13BFB3] hover:underline'> Login</a></p>
        </div>
        <hr className='mt-4 mb-4 md:mt-80'></hr>
        <footer className='flex flex-col-2 '>
          <div>
            <h3
              class="mb-6 text-sm font-semibold text-gray-900 uppercase hidden md:block"
            >
              SUPPORT
            </h3>
            <ul class="text-gray-500 flex md:block">
              <li class="mb-4 px-4 md:px-0">
                <a href="h" class="hover:underline" target="_blank">Contact Us</a>
              </li>
              <li class="mb-4 px-4 md:px-0">
                <a href="m" class="hover:underline">Privacy policy</a>
              </li>
              <li class="mb-4 px-4 md:px-0">
                <a href="m" class="hover:underline">Terms of use</a>
              </li>
            </ul>
          </div>
        </footer>
        <div className='flex justify-center md:-my-40 md:px-96'>
          <div className='-ml-24'>
            <img src={DownLogo} alt="" size={20} className='ml-10 hidden md:block'/>
            <ul className='md:flex md:mr-10 justify-center mt-5 space-x-5 hidden'>
              <li>
                <a
                  href="https://twitter.com/Seekiorapp"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Seekior"
                  class="text-gray-500 hover:text-gray-900"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <span className="md:block  text-sm mt-5 text-center text-gray-500 px-4">Copyright ©2023 Seekior</span>
            <ul className='flex justify-center mt-5 space-x-5 md:hidden'>
              <li>
                <a
                  href="https://twitter.com/Seekiorapp"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Seekior"
                  class="text-gray-500 hover:text-gray-900"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
