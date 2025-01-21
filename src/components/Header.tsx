import React, { ReactElement } from 'react';
import '../styles/header.scss';
import logo from "../assets/logo.png";
import Search from './SearchInput';
import { useHeader } from 'src/hooks/useHeader';

const Header = (): JSX.Element => {
  const { state, controller } = useHeader()
  return (
      <header className="header-container">
        <div className="logo">
          <img onClick={controller.onClick} src={logo} alt="logo" className="logo-img" />
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
