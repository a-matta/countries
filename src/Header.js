import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar">
      <Link to="/">Country Search Application</Link>
      <Link to="/countries">Countries</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
