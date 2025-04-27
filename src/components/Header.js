import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, PROFILE_LOGO } from "../utils/constants";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/langConstants";
import { changeLang } from "../utils/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const handleOnclick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleShowGptSearch());
  };

  const handleLangChnage = (e) => {
    dispatch(changeLang(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex items-center">
          {showGptSearch && <select className="bg-black text-white border-2 p-2" onClick={handleLangChnage}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          
          <button
            className="bg-purple-700 m-4 p-3 rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GptSearch"}
          </button>
          <img src={PROFILE_LOGO} className="w-14 h-14" alt="image" />
          <button
            className="text-white font-bold bg-red-600 rounded-md py-1 px-4 mx-4"
            onClick={handleOnclick}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
