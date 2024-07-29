import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import HeroSection from "./HeroSection";

const Home = () => {
  const location = useLocation();

  return (
    <div className="w-full flex flex-col relative">
      <div className="w-full bg-black relative">
        <Header />
        <div className="mt-[12vh]">
          {location.pathname === "/" && <HeroSection />}
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="w-4/5 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
