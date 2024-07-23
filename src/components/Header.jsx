import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [status, setStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header bg-red-400">
      <div className="logo">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="logo-img"
        />
      </div>
      <div className="nav-list">
        <ul>
          <li>Online Status {onlineStatus ? <span className="green"></span> : <span className="red"></span> }</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
        </ul>
        <button className="login-btn"
          onClick={()=> status === "Login" ? setStatus("Logout") : setStatus("Login")}
        >{status}</button>
      </div>
    </div>
  );
};

export default Header;
