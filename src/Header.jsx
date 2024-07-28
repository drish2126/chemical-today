import React from 'react';
import './Header.css';
import logo from './images/logo.png'; 

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="Logo" className="header-logo" />
      <div className="header-buttons">
        <button className="header-button">Posts</button>
        <button className="header-button">Sectors</button>
        <button className="header-button">Insights</button>
        <button className="header-button">Spotlight</button>
        <button className="header-button">Product</button>
        <button className="header-button">Events</button>
        <button className="header-button">Equipment</button>
        <button className="header-button">Sustainability</button>
        <button className="header-button">Digitalization</button>
        <div className="header-search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M21 21l-4.35-4.35M16.35 14.65a6.65 6.65 0 1 0-9.4-9.4 6.65 6.65 0 0 0 9.4 9.4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></div>
      </div>
    </header>
  );
};

export default Header;
