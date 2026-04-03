import React, { useState } from "react";
import { NETFFLIX_USER_LOGO, NETFLIX_LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => { dispatch(removeUser()); })
      .catch((error) => { console.log(error); });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    setMenuOpen(false);
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full flex items-center justify-between absolute z-50 px-4 sm:px-6 py-3 bg-gradient-to-b from-black flex-row">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          className="w-28 sm:w-36 md:w-44 lg:w-52"
          src={NETFLIX_LOGO}
          alt="Netflix logo"
        />
      </div>

      {user && (
        <>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {showGptSearch && (
              <select
                className="p-2 w-28 h-10 rounded bg-gray-800 text-white text-sm"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className="px-4 py-2 text-white bg-violet-500 rounded-lg text-sm font-medium hover:bg-violet-600 hover:scale-105 transition duration-150 whitespace-nowrap"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "🏠 Home" : "🔍 Search Movie"}
            </button>

            <div
              className="flex flex-col items-center cursor-pointer ml-2 hover:scale-110 transition duration-75"
              onClick={handleSignOut}
            >
              <p className="text-xs text-slate-300 truncate max-w-[100px]">{user.displayName}</p>
              <img src={NETFFLIX_USER_LOGO} alt="user" className="w-8 h-8 rounded" />
              <p className="text-xs text-white font-semibold">Log Out</p>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="md:hidden absolute top-full right-0 left-0 bg-black/95 backdrop-blur-sm px-4 py-4 z-[100] flex flex-col gap-3  border-t border-gray-800">
              {showGptSearch && (
                <select
                  className="p-2 w-full rounded bg-gray-800 text-white text-sm"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((language) => (
                    <option key={language.identifier} value={language.identifier}>
                      {language.name}
                    </option>
                  ))}
                </select>
              )}

              <button
                className="w-full py-2.5 text-white bg-violet-500 rounded-lg text-sm font-medium hover:bg-violet-600 transition"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? "🏠 Home" : "🔍 Search Movie"}
              </button>

              <button
                className="w-full py-2.5 flex items-center justify-center gap-2 bg-gray-800 rounded-lg text-white text-sm hover:bg-gray-700 transition"
                onClick={() => { handleSignOut(); setMenuOpen(false); }}
              >
                <img src={NETFFLIX_USER_LOGO} alt="user" className="w-6 h-6 rounded" />
                <span>{user.displayName}</span>
                <span className="text-red-400 font-semibold">— Log Out</span>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
