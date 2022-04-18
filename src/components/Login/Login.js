import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    
      <div className="container mt-14">

          <div className="w-full max-w-xs mx-auto lg:w-3/4">
              
        <form className="shadow-md bg-slate-100 rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center font-serif font-bold text-xl mb-3">LogIn Here!</h1>
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
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            />
            
            
          </div>
          <p className="mt-3">Don't Have an Account? <Link to='/signup' ><strong>Sign Up</strong></Link> </p>
        </form>
      </div>
      </div>
    
  );
};

export default Login;
