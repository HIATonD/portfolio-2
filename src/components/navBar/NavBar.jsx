import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";

import { Link } from "react-router-dom";

import "./navbar.css";
import Logo from "../../assets/logo.png";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "Contacts",
    to: "/contact",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container-logo">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className={`navbar__container-menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, index) => (
            <li key={index} className="navbar__container-menu--item">
              <Link
                className="navbar__container-menu--item---links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
