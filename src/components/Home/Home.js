import React from "react";
import useServices from "../../hooks/useService";
import image from "../../Image/Wilde-Lodge-Home-10.jpg";
import Footer from "../Footer/Footer";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
  const [service, setService] = useServices();
  console.log(service);
  return (
    <div>
      <div className="">
        <img className="w-full h-screen" src={image} alt="" />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center mt-14 mb-14">
          My Services
        </h1>

        <div className="mb-20 grid md:grid-cols-3 gap-12 ml-16 mr-16">
          {service.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
