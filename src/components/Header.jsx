import { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [status, setStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="fixed top-0 bg-[#131213] w-full h-[12vh] z-30">
      <div className="header h-full text-white w-full sm:w-4/5 mx-auto flex items-center sm:px-0 px-4 justify-between">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="hidden sm:flex gap-10 items-center">
          <ul className="flex gap-10 items-center">
            <li className="relative">
              <span className="pr-1">Online Status</span>
              {onlineStatus ? (
                <span className="absolute h-3 w-3 bg-green-400 top-0 rounded-full"></span>
              ) : (
                <span className="absolute h-3 w-3 bg-red-400 top-0 rounded-full"></span>
              )}
            </li>
            <li className="hover:text-[#FDC55E] hover:scale-105 hover:font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#FDC55E] hover:scale-105 hover:font-semibold">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-[#FDC55E] hover:scale-105 hover:font-semibold">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-[#FDC55E] hover:scale-105 hover:font-semibold">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <i className="bi bi-cart4 text-2xl"></i>
            </li>
          </ul>
          <button
            onClick={() =>
              status === "Login" ? setStatus("Logout") : setStatus("Login")
            }
            className="hover:scale-105 bg-[#F65F5F] rounded text-black text-lg px-4 py-1 hover:bg-[#F65F5F] hover:text-[#262626] hover:font-semibold"
          >
            {status}
          </button>
        </div>
        <div className="sm:hidden block">
          <i className="bi bi-list text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
