import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";


const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handlesignOut = () =>{
    signOut(auth);
    navigate('/login');
  }
  return (
    <nav className="h-14 text-white bg-indigo-600 items-center">
      <div
        onClick={() => setOpen(!open)}
        className="absolute top-2 left-2 w-6 h-6 md:hidden"
      >
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>

      <div className="md:flex justify-around items-center font-bold">
        <h1 className="pl-20 w-full text-3xl">Wilde Lodge</h1>

        <ul
          className={`md:flex leading-10S text-lg justify-end text-center mr-20 bg-indigo-600 md:static absolute w-full duration-500 ease-in ${
            open ? "top-12" : "top-[-170px]"
          }`}
        >
          <li className="hover:text-red-500">
            <Link to="/" className="mr-5">
              Home
            </Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/checkout" className="mr-5">
              CheckOut
            </Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/blogs" className="mr-5">
              Blogs
            </Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="about" className="mr-5">
              About
            </Link>
          </li>
          <li className="hover:text-red-500">
            {
              user ? <button onClick={handlesignOut} className=" font-bold">SignOut</button> :
            <Link to="login" className="mr-5">
              Login
            </Link>
            }
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
