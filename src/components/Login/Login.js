import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from '../../firebase.init'
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [errors, setError] = useState();

  let from = location.state?.from?.pathname || "/";
  let [signInWithGoogle, user1] = useSignInWithGoogle(auth);
  let [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  

  if (user || user1) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    
      setError("Password or email doesn't match!");
    
  };

  const handleSignInWithGmail = () => {
    signInWithGoogle();
  };
  // const handlePasswordReset = (email) => {
  //   if (email) {
  //     sendPasswordResetEmail(email);
  //     toast("Sending Link in Email");
  //   } else {
  //     toast("Please enter the Email Address");
  //   }
  // };

  // const navigateRegister = (event) => {
  //   navigate("/register");
  // };

  return (
    <div className="container mt-14">
      <div className="w-full max-w-xs mx-auto lg:w-3/4">
        <form onSubmit={handleSubmit} className="shadow-md bg-slate-100 rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center font-serif font-bold text-xl mb-3">
            LogIn Here!
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Email"
              ref={emailRef}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              ref={passwordRef}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit">Log In</button>
              

          </div>
          <p className="mt-3">
            Don't Have an Account?
            <Link to="/signup">
              <strong>Sign Up</strong>
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
