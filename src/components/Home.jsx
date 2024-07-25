import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="w-full bg-white relative">
      <div className="home flex flex-col h-[70vh]">
        <div className="sticky-container relative">
          <div className="fixed top-0 z-50 w-full bg-black bg-opacity-50 backdrop-blur-md shadow-md">
            <Header />
          </div>
        </div>
        <HeroSection />
      </div>
      <div className="w-4/5 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
