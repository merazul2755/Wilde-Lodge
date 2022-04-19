import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const CheckOut = () => {
    const [name, setName] = useState("");
    const [address, SetAddress] = useState("");
    const [error, setError] = useState("");
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const submit = (e)=>{
        e.preventDefault();
        if(name !== '' && address !=='' ){

            navigate('/thanks');
        }else{
            setError("Please fill the requirement")
        }
    }
  return (
    <div className="container mt-8">
      <div className="w-full max-w-xs mx-auto lg:w-3/4">
        <div className="text-center mb-4">
        <h1><strong className="text-2xl  text-green-700">Welcome!! {user?.displayName}</strong></h1>
      </div>
        <form className="shadow-md bg-slate-100 rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center font-serif font-bold text-xl mb-3">
            Please Put Your Information!
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input onBlur={(e)=>setName(e.target.value) }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={user?.email}
              disabled
            />
          </div>

          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="address"
            >
              Address
            </label>
            <input onBlur={(e)=>SetAddress(e.target.value) }
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Put Your Address"
              required
            />
          </div>
          {error ? <p className=" text-red-600 mb-3">{error}</p> : <p></p>}
          <div className="items-center justify-between">
            <button onClick={submit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
