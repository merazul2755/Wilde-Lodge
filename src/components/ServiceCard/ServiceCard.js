import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";


const ServiceCard = (props) => {
  const { name, img, des,id} = props.service;
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const navigateToServiceDetail = (id) => {
    if(user){
      navigate(`/checkout/${id}`);
    }else{
      navigate('/login')
    }
  };
  return (
    <div>
      
      <div className=" sm:h-auto shadow-lg p-5 rounded-xl">
        <div className="justify-items-center ">
          <img  src={img} alt="" />
        </div>
        <h1 className="text-2xl font-bold mt-5 mb-5">{name}</h1>
        <p className=" text-justify mb-5">{des}</p>

        <button onClick={() => navigateToServiceDetail(id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full">Buy Now</button>

      </div>
    </div>
  );
};

export default ServiceCard;
