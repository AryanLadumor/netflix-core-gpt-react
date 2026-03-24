import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_LOGIN_PAGE_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import { validateFormData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg , setErrorMsg] = useState("")
  
  const username = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
   

  const handleButtonClick = () =>{
    console.log(email.current.value , password.current.value)
   const msg =  validateFormData(email.current.value , password.current.value);
   console.log(msg)
   setErrorMsg(msg)
  }


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative  w-full h-full">
      <Header />
      {/* body of login page */}
      <div className="">
        <img
          className="w-full h-screen object-cover"
          src={NETFLIX_LOGIN_PAGE_IMG}
          alt=""
        />
        <div className="absolute  inset-0 bg-black/40"></div>
      </div>

      {/* Form Of Login/sign in */}
      <form onSubmit={(e)=>e.preventDefault()} className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-80 p-8  bg-black/70 transition duration-1000">
        <h2 className="text-white text-2xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <input
        ref={email}
          type="email"
          placeholder="Email address"
          className="p-2 m-2 w-full rounded bg-gray-700 text-white"
          />
          {!isSignInForm && (
            <input
            ref = {username}
              type="text"
              placeholder="Username"
              className="p-2 m-2 w-full rounded bg-gray-700 text-white"
            />
          )}
        <input
        ref = {password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full rounded bg-gray-700 text-white"
        />

        <p className=" m-1 text-red-600 text-sm">{errorMsg}</p>
        <button className="p-3 mt-7  m-4 w-full bg-red-600 text-white rounded font-bold hover:scale-[1.02] transition duration-75"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? (
          <p className="text-gray-500 text-sm m-6">
            New to Netflix?
            <Link
              onClick={toggleSignInForm}
              className="text-white font-semibold "
            >
              {" "}Sign Up Now.
            </Link>
          </p>
          
        ) : (
          <p className="text-gray-500 text-sm m-6">
            Already had a Account, 
            <Link
              onClick={toggleSignInForm}
              className="text-white font-semibold "
            >
               Sign In.
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
