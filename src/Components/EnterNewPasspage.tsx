
import { useState } from 'react';
import EnterNewPass from "../assets/EnterNewPass.svg";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaChevronLeft } from "react-icons/fa";
library.add(faLock, faEye, faEyeSlash);

function EnterPassword() {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="bg-[#AB97D5] flex items-center justify-center" style={{ minHeight: '116vh' }}>
        <div className='relative top-12 left-5'>
        <FaChevronLeft className="text-white w-5 h-5" />
        </div>
        <div className="w-full max-w-md p-4">
            <div className='relative p-4'>
                <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-[#FFF5E9]"
                style={{position:'absolute', top:"-1.5rem", left:"3rem" }}>
                    Enter New Password
                </h2>
                <h2 className="text-[#FFF5E9]" style={{position:'absolute', top:"0.5rem",left:"3rem" }}>
                    Please enter your new password
                </h2>
          </div>
          <div className="flex justify-center my-8">
          <img src={EnterNewPass} alt="Image" className="w-44 h-52 object-cover" />
        </div>
          <form className="space-y-6 mt-10" action="#" method="POST">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faLock} className="text-gray-500" />
              </span>
              <input
                placeholder="Enter New Password"
                id="new-password"
                name="new-password"
                type={showPassword ? 'text' : 'password'}
                required
                className="block w-full rounded-full border-0 pl-10 pr-10 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-500" />
              </span>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faLock} className="text-gray-500" />
              </span>
              <input
                placeholder="Confirm Password"
                id="confirm-password"
                name="confirm-password"
                type={showPassword ? 'text' : 'password'}
                required
                className="block w-full rounded-full border-0 pl-10 pr-10 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-500" />
              </span>
            </div>
          </form>
          <br />
          <h2 className="text-[#FFF5E9]">
            Both passwords don't match
          </h2>
          <br />
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-[#82A1FD] px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default EnterPassword;
  