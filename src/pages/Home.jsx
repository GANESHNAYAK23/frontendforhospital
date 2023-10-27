import React from "react";
import Login from "../components/Login";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <Login />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <AboutUs />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Home;
