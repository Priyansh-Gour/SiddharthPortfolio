import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="new-nav">
      <div className="nav_part1 new-nav_part1">
        <h2 className="magnet new-magnet">Siddharth Patel</h2>
      </div>
      <div className="nav_part2 new-nav_part2">
        <h2 className="button menu new-menu" onClick={toggleMenu}>
          <a className="ri-menu-line magnet new-magnet" href="javascript:void(0);"></a>
        </h2>
        <div className={`menu_non new-menu_non ${isMenuOpen ? "show" : ""}`}>
          <h4 className="button magnet new-magnet">
            <Link to="/projects">Projects</Link>
          </h4>
          <h4 className="button magnet new-magnet">
            <Link to="/about">About</Link>
          </h4>
          <h4 className="button magnet new-magnet">
            <Link to="/contact">Contact</Link>
          </h4>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
