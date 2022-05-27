import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="w-full h-full  min-h-screen flex">
      <div className="w-2/4 bg-purple-700">hello</div>
      <div className="w-2/4 bg-slate-900">
        <div className="w-full flex flex-col items-center justify-center h-full text-white ">
          <div className="w-2/4">
            <h1 className="text-5xl font-light pb-4 pr-12 mb-8 border-b-2 border-b-purple-600 w-fit">Sign In</h1>
            <form className="flex flex-col space-y-8 justify-center w-full max-w-md mx-auto">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white text-lg">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="border-2 border-transparent
                   border-b-gray-400 bg-transparent w-full outline-none pt-0 pb-4 focus:border-b-purple-600 duration-150 text-lg"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white text-lg">Password</span>
                </label>
                <div className="relative">
                <input
                  type={showPassword ? 'password' : 'text'}
                  placeholder="Enter Password"
                  className="border-2 border-transparent border-b-gray-400 bg-transparent w-full outline-none pt-0 pb-4 pr-10 focus:border-b-purple-600 duration-150 text-lg"
                />
                <button 
                type="button" 
                className="absolute top-3 right-2"
                onClick={() => setShowPassword(!showPassword)}
                >
                    {
                        showPassword ? <EyeIcon className="w-5"/> : <EyeOffIcon className="w-5"/>
                    }
                </button>
                </div>
              </div>
             <div className="flex items-center space-x-4">
             <input className="btn px-8 bg-purple-600 hover:bg-purple-500 text-white w-fit" type="submit" />
             <p className="text-gray-400">dont have a account? <Link className="ml" to='/register'>REGISTER</Link></p>
             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
