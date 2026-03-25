import React from "react";
import { NETFFLIX_USER_LOGO, NETFLIX_LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  return (
    <div className=" flex items-center justify-between absolute z-10 px-6 py-2 bg-gradient-to-b from-black w-full ">
      <div>
        <img className="w-52 " src={NETFLIX_LOGO} alt="logo" />
      </div>

      {user && (
        <div
          className="flex flex-col justify-center mr-10 hover:scale-110 transition duration-75  items-center cursor-pointer"
          onClick={handleSignOut}
        >
          <img
            src={NETFFLIX_USER_LOGO}
            alt=""
            className=" w-9 h-9 cursor-pointer "
          />
          <p className="text-xs font-bold text-red-600">Sign Out</p>
          <p className="text-xs font-bold text-red-600">{user.displayName}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
