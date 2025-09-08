import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li> Status : {onlineStatus === false ? "🛑" : "✅"}</li>
          <li>
            {" "}
            <Link to="/"> Home </Link>
          </li>
          <li>
            {" "}
            <Link to="/about"> About Us </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact"> Contact Us </Link>{" "}
          </li>
          <li>
            {" "}
            <Link> Cart </Link>{" "}
          </li>
          <button
            className="login"
            style={{
              width: "90px",
              padding: "10px",
              height: "44px",
              marginTop: "12px",
              cursor: "pointer",
            }}
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
