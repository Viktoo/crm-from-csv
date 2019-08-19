import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header-container">
        <div className='Header-logo'>
          <a href="/"> 
            <img src={require("../../assets/DTLogo.png")} className='Header-image'/>
          </a>
        </div>
        <div className='Header-personIcon'>
          <img src={require("../../assets/PersonIcon.png")} className='Header-personIconImage'/>
        </div>
          <header className="Header">
            <h2 className="Header-title">Data Match and Report</h2>
          </header>
        <div className='Header-tabBar'>
          <div className ='Header-bottomAligner'>
            <div className='Header-unselected'></div>
            <div className='Header-selected'></div>
            <div className='Header-unselected'></div>
            <div className='Header-unselected'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
