import React, { Component } from "react";

//stateless functional component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar renderd");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
