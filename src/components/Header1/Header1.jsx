import React from "react";
import "./Header1.scss";
// import {Link} from 'react-router-dom';
import logo from "../../Assets/img/logo.png";
import offer from "../../Assets/img/discount.jpeg";
import makeMyTrip from "../../Assets/img/makeMyTrip.avif";
import bag from "../../Assets/img/bag.png";
import makeMyTrip2 from '../../Assets/img/makemytrip2.svg';
import india from '../../Assets/img/india.png.png'
import { BiChevronDown } from "react-icons/bi";


const Header1 = () => {
  return (
    <section className="header1-wrapper">
      <div className="header1">
        <div className="logo">
          <img src={logo} alt="..." />
        </div>

        {/* Right Section */}
        <div className="right-sec">
          <div className="offer">
            <img src={offer} alt="..." />
            <div className="text">
              <span>Super Offers</span>
              <span>Expplore great deals & offers</span>
            </div>
          </div>

          <div className="myBiz">
            <img src={makeMyTrip} alt="..." />
            <div className="text">
              <span>Introducing myBizz</span>
              <span>Business Travel Solution</span>
            </div>
          </div>

          <div className="myTrip">
            <img src={bag} alt="..." />
            <div className="text">
              <span>My trips</span>
              <span>Manage your bookings</span>
            </div>
          </div>

          <div className="login">
            <img src={makeMyTrip2} className="cropped-img" alt="..." />
            <span className="user-name">Login Or Create Account</span>
            <BiChevronDown className="down-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header1;
