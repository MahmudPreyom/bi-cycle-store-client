import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiShop } from "react-icons/gi";
import { Button } from "antd";
import { useState } from "react";
import logo from "../../../assets/Adobe Express - file.png";
import { IoIosContact, IoIosHome } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { RiDashboardLine } from "react-icons/ri";
import { logout } from "../../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useAppSelector((state) => state.auth.user);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <div className="nav-container">
        <div className="grid navbar-grid">
          {/* Logo Section */}
          <div className="logo">
            <img src={logo} className="logo-1" alt="Logo" />
          </div>

          {/* Navigation Menu */}
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul className="nav-links">
              <li>
                <Link className="nav-item" to="#">
                  <IoIosHome />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="#">
                  <GiShop />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="#">
                  <GrServices />
                  <span>Service</span>
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="#">
                  <IoIosContact />
                  <span>Contact</span>
                </Link>
              </li>
              {user ? (
                <li>
                  <Link className="nav-item" to="#">
                    <RiDashboardLine />
                    <span>Dashboard</span>
                  </Link>
                </li>
              ) : null}

              {/* Buttons Aligned Center with Nav Links */}
              <div>
                {user ? (
                  <li>
                    <Link to="/login">
                      <Button onClick={handleLogout} className="nav-btn">
                        Logout
                      </Button>
                    </Link>
                  </li>
                ) : (
                  <div className="nav-buttons">
                    <li>
                      <Link to="/login">
                        <Button className="nav-btn">Login</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/register">
                        <Button className="nav-btn">Sign Up</Button>
                      </Link>
                    </li>
                  </div>
                )}
              </div>
            </ul>
          </nav>

          {/* Hamburger Menu Button */}
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
