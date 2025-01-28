import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "antd";
import { useState } from "react";
import logo from "../../../assets/Adobe Express - file.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="log">
            <img src={logo} className="logo-1" alt="" />
          </div>

          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  to="#"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  to="#"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  to="#"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  to="#"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <Button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
