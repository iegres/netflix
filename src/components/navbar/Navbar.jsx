import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            style={{width: 60, height: "auto"}}
            src="https://www.freepnglogos.com/uploads/red-logo-png-16.png"
            alt="Streaming service logo"
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          {/* <span>New and Popular</span>
          <span>My List</span> */}
        </div>
        <div className="right">
          <Search className="icon" />
          {/* <span>KID</span> */}
          <Notifications className="icon" />
          <img
            src="https://loremflickr.com/500/500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options" style={{padding: "0px 0px 12px"}}>
              <span>Settings</span>
              <Link to="/register" className="link">
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
