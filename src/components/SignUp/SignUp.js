import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const SignUp = () => {
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const navigate = useNavigate();
  let [signInWithGoogle] = useSignInWithGoogle(auth);

  const [updateProfile] = useUpdateProfile(auth);

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleSignInWithGmail = () => {
    signInWithGoogle();
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Updated profile");
    // navigate("/home");
  };
  return (
    <div>
      <div className="container mt-14">
        <div className="w-full max-w-xs mx-auto lg:w-3/4">
          <form
            onSubmit={handleRegister}
            className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
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
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="confirm-password"
                placeholder="******************"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <input
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
                value='Register'
              >
                Sign Up
              </input>
            </div>
            <p className="mt-3">
              Have an Account?
              <Link to="/login">
                <strong> Log In</strong>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
