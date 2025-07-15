import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              if (btnNameReact === "Login") {
                setBtnNameReact("Logout");
              } else {
                setBtnNameReact("Login");
              }
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
