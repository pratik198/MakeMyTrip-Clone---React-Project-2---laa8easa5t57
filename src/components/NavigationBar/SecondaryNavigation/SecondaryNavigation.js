import React, { useState } from "react";
import "./SecondaryNavigation.css";
import LoginSignUpButton from "../../../Assets/SecondaryNavLoginSignUp.png";
import MakeMyTripLogo from "../../../Assets/mmtlogo2.png";
import Login from "../../LoginSignUp/Login";
import { useNavigate } from "react-router-dom";

const SecondaryNavigation = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  const handleNavigateFlights = () => {
    navigate("/");
  };

  const [loginOpen, setLoginOpen] = useState(false);
  const [, forceUpdate] = useState();

  const handleLoginOpen = () => {
    setLoginOpen((prevLoginOpen) => !prevLoginOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    forceUpdate((prev) => !prev);
  };

  const jwt = localStorage.getItem("jwtToken");

  return (
    <div className="SecondaryNvigation__Parent_Container">
      <div className="SecondaryNvigation__Child_Container">
        <div className="SecondaryNvigation__Navigation_Container">
          <img
            onClick={handleScrollToTop}
            className="SecondaryNvigation__Navigation_Container_makeMytrip_logo"
            src={MakeMyTripLogo}
          />
          <ul>
            <li onClick={handleScrollToTop}>
              <div className="SecondaryNvigation__Navigation_FlightsImg_div">
                <img
                  className="SecondaryNvigation__Navigation_FlightsImg"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>Flights</span>
            </li>
            <li onClick={handleScrollToTop}>
              <div className="SecondaryNvigation__Navigation_HotelsImg_div">
                <img
                  className="SecondaryNvigation__Navigation_HotelsImg"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>Hotels</span>
            </li>
            <li onClick={handleScrollToTop}>
              <div className="SecondaryNvigation__Navigation_TrainsImg_div">
                <img
                  className="SecondaryNvigation_trian_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>Trains</span>
            </li>
            <li onClick={handleScrollToTop}>
              <div className="SecondaryNvigation__Navigation_BusesImg_div">
                <img
                  className="SecondaryNvigation_Buses_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>Buses</span>
            </li>
          </ul>
        </div>
        {jwt === null ? (
          <img
            onClick={handleLoginOpen}
            className="w-[120px] cursor-pointer"
            src={LoginSignUpButton}
            alt="LoginSignUpButton"
          />
        ) : (
          <div
            style={{
              width: "180px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                backgroundColor: "lightgreen",
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <p style={{ color: "white", fontWeight: "bold" }}>M</p>
            </div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
              onClick={handleLogout}
            >
              Hi {localStorage.getItem("name")}
            </p>
          </div>
        )}
      </div>
      {loginOpen && <Login onClose={handleLoginOpen} />}
    </div>
  );
};

export default SecondaryNavigation;
