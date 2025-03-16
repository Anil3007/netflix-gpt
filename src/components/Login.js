import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {PHOTO_URL} from '../utils/constants';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInform, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };

  const handleBtnClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMsg(message);
    if (message) return;

    if (!isSignInform) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          alt="background"
          className="z-100 grayscale-25"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-10 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-85"
      >
        <h1 className="text-3xl font-bold my-3">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInform && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-2.5 my-4 w-full bg-transparent border-2 border-gray-500 rounded-md"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2.5 my-4 w-full bg-transparent border-2 border-gray-500 rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-transparent border-2 border-gray-500 rounded-md"
        />
        <p className="text-red-700">{errorMsg}</p>
        <button
          className="bg-red-700 py-2 px-4 my-4 w-full"
          onClick={handleBtnClick}
        >
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>

        <h1 className="my-4" onClick={toggleSignInForm}>
          {isSignInform
            ? "New to Netflix-GPT? Sign Up"
            : "Already registered? Sign In"}
        </h1>
      </form>
    </div>
  );
};

export default Login;
