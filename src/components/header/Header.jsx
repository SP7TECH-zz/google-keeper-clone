import React from "react";
import "./Header.scss";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <header className="header">
      <MenuIcon className="menu-icon" />
      <h1 className="main-title">Keep</h1>
    </header>
  );
}

export default Header;
