import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#f9fafb",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const brandStyle = {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#4f46e5", // Indigo-600
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "1.5rem",
  };

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#5b21b6" : "#374151", // Purple if active, gray otherwise
    fontWeight: isActive ? "bold" : "normal",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  });

  return (
    <nav style={navStyle}>
      <div style={brandStyle}>MyPortfolio</div>
      <div style={linkContainerStyle}>
        <NavLink to="/" style={linkStyle} end>
          Home
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
        <NavLink to="/projects" style={linkStyle}>
          Projects
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
