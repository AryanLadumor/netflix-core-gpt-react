import React from "react";
import { NETFFLIX_USER_LOGO, NETFLIX_LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";
import {  SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //TODO Know this Unscribe when unmoount
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e)=>{
      console.log(e.target.value)
      dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className=" flex items-center justify-between absolute z-10 px-6 py-2 bg-gradient-to-b from-black w-full ">
      <div>
        <img className="w-52 " src={NETFLIX_LOGO} alt="logo" />
      </div>

      {user && (
        <div className="flex justify-center items-center">

          <div className="p-2 m-2 mr-10">

            {showGptSearch && <select name="" id="" className="p-2 m-4 w-28 h-11 rounded bg-gray-800 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(language=><option key={language.identifier} value={language.identifier} className="rounded">{language.name}</option>)}
            </select>}

            <button
              className="p-2 m-4 text-white bg-violet-500 rounded-lg w-28 h-11 hover:scale-105"
              onClick={handleGptSearchClick}
            >
              {showGptSearch? "Home":"GPT Search"}
            </button>
          </div>

          <div
            className="flex flex-col justify-center mr-10 hover:scale-110 transition duration-75  items-center cursor-pointer"
            onClick={handleSignOut}
          >
            <p className="text-sm font-semibold text-slate-300">
              ({user.displayName})
            </p>
            <img
              src={NETFFLIX_USER_LOGO}
              alt=""
              className=" w-9 h-9 cursor-pointer "
            />
            <p className="text-md font-semibold text-white">Log Out</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
