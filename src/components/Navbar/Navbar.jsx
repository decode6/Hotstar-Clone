import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
  
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-section">
            <NavItem link="#">Home</NavItem>
            <NavItem link="#">TV Shows</NavItem>
            <NavItem link="#">Movies</NavItem>
          </div>
          <div className="navbar-section">
            <NavItem link="#">Sports</NavItem>
            <NavItem link="#">News</NavItem>
            <NavItem link="#">Premium</NavItem>
          </div>
        </div>
      </nav>
    </>
  );
};
function NavItem({ link, children }) {
  return (
    <a href={link} className="nav-item">
      {children}
    </a>
  );
}

export default Navbar;
