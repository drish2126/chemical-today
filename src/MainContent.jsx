import React from 'react';
import './MainContent.css';
import Article from './Article';
import Sidebar from './Sidebar';
import fullWidthImage from './images/main.png'; 

const MainContent = () => {
  return (
    <div className="main-content">
      <img src={fullWidthImage} alt="Full Width" className="full-width-image" />
      <div className="content-wrapper">
      <Article />
      <Sidebar />
      </div>
    </div>
  );
};

export default MainContent;
