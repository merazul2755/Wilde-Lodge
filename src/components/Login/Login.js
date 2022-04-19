
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import img from '../../Image/google-sign-in.png'

const auth = getAuth(app);

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState("");

  const googleSignIn = () =>{
    signInWithPopup(auth, provider)
    
      navigate('/checkout');
  }

  const handleSignIn=(e)=>{
    if(email ==='' || password === ''){
      setError('Email or Password Field is empty!')
    }
    else{
      signInWithEmailAndPassword(auth, email,password)
    
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;
      console.log(errorCode);
    })
    e.preventDefault();
    navigate('/checkout');
    }
  }
 

  return (
    <div className="container mt-14">
      <div className="w-full max-w-xs mx-auto lg:w-3/4">
        <form className="shadow-md bg-slate-100 rounded px-8 pt-6 pb-8 mb-4">
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
            <input onBlur={(e) => setEmail(e.target.value)}
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
            <input onBlur={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              required
            />
          </div>
          <div className="items-center justify-between">
            <button onClick={handleSignIn}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit">Log In</button>     

              <p className="text-center mt-3 mb-3">-------or-------</p>

              <button onClick={googleSignIn} className="w-full flex justify-center">
                <img src={img} alt="" />
              </button>
              {error ? error : ""}

          </div>
          <p className="mt-3">
            Don't Have an Account?
            <Link to="/signup">
              <strong>Sign Up</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
