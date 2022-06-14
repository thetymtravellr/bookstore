import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from '../firebase.init';

const Register = () => {
  //hooks
  const [user,loading,error] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()


  //states
  const [showPassword, setShowPassword] = useState(false);

  const [
    createUserWithEmailAndPassword,
    emailUser,
    emailLoading,
    emailError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

  const onSubmit = async (data) => {
    
    const name = data.name;
    const email = data.email;
    const password = data.password;

    await createUserWithEmailAndPassword(email,password);
    await updateProfile({ displayName: name });
    await sendEmailVerification()

  };
  
  if(user){
    navigate('/verifyEmail')
  }

  return (
    <div className="w-screen min-h-screen flex">
      <div className="w-full lg:w-2/4 bg-slate-900">
        <div className="w-full flex flex-col items-center justify-center h-full text-white ">
          <div className="w-2/4">
            <h1 className="text-5xl font-light pb-4 pr-12 mb-8 border-b-2 border-b-purple-600 w-fit">
              Sign Up
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-8 justify-center w-full max-w-md mx-auto"
            >
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white text-lg">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="border-2 border-transparent
                   border-b-gray-400 bg-transparent w-full outline-none pt-0 pb-4 focus:border-b-purple-600 duration-150 text-lg"
                  {...register("name")}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white text-lg">Email</span>
                </label>
                <input
                  type="email"
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
                  Signup
                </button>
                <p className="text-gray-400">
                  already have a account?{" "}
                  <Link
                    className="ml text-purple-600 font-semibold hover:underline"
                    to="/login"
                  >
                    LOGIN
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="lg:block hidden w-2/4 bg-purple-700">hello</div>
    </div>
  );
};

export default Register;
