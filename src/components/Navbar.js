import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const LINKS = [
    { to: "/", text: "Home" },
    { to: "/starred", text: "Starred" },
  ];
  return (
    <div className="nav">
      <ul>
        {LINKS.map((item) => (
          <li key={item.to}>
            <Link className="links" to={item.to}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
