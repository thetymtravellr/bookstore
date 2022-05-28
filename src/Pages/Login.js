import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signInWithEmailAndPassword(email, password);
  };

  useEffect(()=>{
    if(user || emailUser){
      navigate(from, { replace: true })
    }
  },[user,emailUser,navigate,from])

  return (
    <div className="w-screen min-h-screen flex">
      <div className="lg:block hidden w-2/4 bg-purple-700">hello</div>
      <div className="w-full lg:w-2/4 bg-slate-900">
        <div className="w-full flex flex-col items-center justify-center h-full text-white ">
          <div className="w-2/4">
            <h1 className="text-5xl font-light pb-4 pr-12 mb-8 border-b-2 border-b-purple-600 w-fit">
              Sign In
            </h1>
            <form
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col space-y-8 justify-center w-full max-w-md mx-auto">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white text-lg">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="border-2 border-transparent
                   border-b-gray-400 bg-transparent w-full outline-none pt-0 pb-4 focus:border-b-purple-600 duration-150 text-lg"
                   {...register("email")}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white text-lg">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="border-2 border-transparent border-b-gray-400 bg-transparent w-full outline-none pt-0 pb-4 pr-10 focus:border-b-purple-600 duration-150 text-lg"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    className="absolute top-3 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <motion.div whileTap={{ scale: 0.9 }}>
                        <EyeOffIcon className="w-5" />
                      </motion.div>
                    ) : (
                      <motion.div whileTap={{ scale: 0.9 }}>
                        <EyeIcon className="w-5" />
                      </motion.div>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="btn border-0 px-8 bg-purple-600 hover:bg-purple-500 text-white w-fit">
                  SignIn
                </button>
                <p className="text-gray-400">
                  dont have a account?{" "}
                  <Link
                    className="ml text-purple-600 font-semibold hover:underline"
                    to="/register"
                  >
                    REGISTER
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
