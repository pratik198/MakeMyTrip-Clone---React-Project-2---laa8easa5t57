import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="navigation-wrapper">
      <div className="navigation">
        <div className="img-container">
          <div className="img-container-inner">
            <img
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
              alt="."
            />
          </div>
          <span>Flights</span>
        </div>

        <Link to="/hotels" className="img-container">
          <div className="img-container-inner">
            <img
              className="img__1"
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
              alt="."
            />
          </div>
          <span>Hotels</span>
        </Link>

        <div className="img-container">
          <div className="img-container-inner">
            <img
            className="img__2"
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
              alt="."
            />
          </div>
          <span>Villas</span>
        </div>

        <div className="img-container">
          <div className="img-container-inner">
            <img
            className="img__3"
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
              alt="."
            />
          </div>
          <span>Holiday</span>
        </div>

        <div className="img-container">
          <div className="img-container-inner">
            <img
            className="img__4"
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
              alt="."
            />
          </div>
          <span>Trains</span>
        </div>

        <div className="img-container">
          <div className="img-container-inner">
            <img
            className="img__5"
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
              alt="."
            />
          </div>
          <span>Buses</span>
        </div>

        <div className="img-container">
          <div className="img-container-inner">
            <img
              className="img__6"
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
              alt="."
            />
          </div>
          <span>Cabs</span>
        </div>

        <div className="img-container">
          <div className="img-container-inner">
            <img
            className="img__7"
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
              alt="."
            />
          </div>
          <span>Forex</span>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
