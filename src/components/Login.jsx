import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_LOGIN_PAGE_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import { validateFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const msg = validateFormData(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          updateProfile(auth.currentUser, { displayName: username.current.value })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          setErrorMsg(error.code + "-" + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          setErrorMsg(error.code + "-" + error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full min-h-screen">
      <Header />

      {/* Background */}
      <div className="w-full h-screen">
        <img
          className="w-full h-full object-cover"
          src={NETFLIX_LOGIN_PAGE_IMG}
          alt="background"
        />
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40"></div>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          flex flex-col items-center
          w-[90vw] max-w-sm sm:max-w-md
          p-6 sm:p-8
          bg-black/80 sm:bg-black/75
          rounded-md
          transition duration-1000"
      >
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-3 my-2 w-full rounded bg-gray-700 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {!isSignInForm && (
          <input
            ref={username}
            type="text"
            placeholder="Username"
            className="p-3 my-2 w-full rounded bg-gray-700 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full rounded bg-gray-700 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {errorMsg && (
          <p className="w-full m-1 text-red-500 text-xs sm:text-sm text-center break-words">
            {errorMsg}
          </p>
        )}

        <button
          className="p-3 mt-5 w-full bg-red-600 text-white rounded font-bold text-sm sm:text-base hover:bg-red-700 hover:scale-[1.02] transition duration-150"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? (
          <p className="text-gray-400 text-sm mt-5 text-center">
            New to Netflix?{" "}
            <Link onClick={toggleSignInForm} className="text-white font-semibold hover:underline">
              Register Now.
            </Link>
          </p>
        ) : (
          <p className="text-gray-400 text-sm mt-5 text-center">
            Already have an account?{" "}
            <Link onClick={toggleSignInForm} className="text-white font-semibold hover:underline">
              Sign In.
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
