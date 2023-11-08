import React from "react";
import "./Header1.scss";
import logo from '../../Assets/logo.png'

function Header1() {
  return (
    <section className="header1-nav">
      <div className="header1">
        <div className="logo">
          <img src={logo} alt=".." />
        </div>
        <div className="right-sec">
          <div className="offer">
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header1;
