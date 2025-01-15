import React from 'react';
import '../styles/header.scss';
import logo from "../assets/logo.png";
import Search from './Search';

function Header() {
  return (
      <header className="header-container">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <Search />
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
