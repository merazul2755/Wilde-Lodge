import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (confirmPass === password && password.length >= 6) {
      createUserWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //   const user = result.user;
        //   console.log(user);
        // })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
        });
      sendEmailVerification(auth.currentUser);
      navigate("/login");
    } else {
      setError("Password Not Match or Must be 6 letters");
    }
    e.preventDefault();
  };

  return (
    <div>
      <div className="container mt-14">
        <div className="w-full max-w-xs mx-auto lg:w-3/4">
          <div className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-center font-serif font-bold text-xl mb-3">
              Sign Up Here!
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                onBlur={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                onBlur={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Confirm Password
              </label>
              <input
                onBlur={(e) => setConfirmPass(e.target.value)}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                name="confirm-password"
                placeholder="******************"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Sign Up
              </button>
            </div>
            {error ? <p className=" text-red-600">{error}</p> : <p></p>}

            <p className="mt-3">
              Have an Account?
              <Link to="/login">
                <strong className=" text-green-600"> Log In</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
