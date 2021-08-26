import React from "react";
import "./Header.scss";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderSearch from "../header-search/header-search.component";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <MenuIcon className="menu-icon" />
        <h1 className="main-title">Keep</h1>
      </div>
      <HeaderSearch />
      <AccountCircleIcon className="header-account" />
    </header>
  );
}

export default Header;
