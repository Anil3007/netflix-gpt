import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg" alt="background"/>
      </div>
      <form className="absolute p-10 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-85">
        <h1 className="text-3xl font-bold my-3">{isSignInform?"Sign In" : "Sign Up"}</h1>

        {!isSignInform && (<input type="text" placeholder="Full Name" className="p-2.5 my-4 w-full bg-transparent border-2 border-gray-500 rounded-md"/>)} 

        <input type="text" placeholder="Email" className="p-2.5 my-4 w-full bg-transparent border-2 border-gray-500 rounded-md"/>

        <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-transparent border-2 border-gray-500 rounded-md"/>

        <button className="bg-red-700 py-2 px-4 my-4 w-full">{isSignInform?"Sign In" : "Sign Up"}</button>

        <h1 className="my-4" onClick={toggleSignInForm}>{isSignInform ? "New to Netflix-GPT? Sign Up" : "Already registered? Sign In"}</h1>
      </form>
    </div>
  );
};

export default Login;
