import "../NavBar/navbar.css"
import Logo from "../../assets/nav-logo.png"
import React from 'react';

function NavBar(props) {
  return (
    <div className="nav-bar">
      <a href="">
        <img
          className="nav-img"
          src={Logo}
          alt="Click to access main page"
        />
      </a>
    </div>
  );
}

export default NavBar;