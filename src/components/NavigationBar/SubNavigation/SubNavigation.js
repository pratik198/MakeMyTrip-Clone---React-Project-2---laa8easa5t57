import React, { useState } from "react";
import "./SubNavigation.css";
import { useNavigate } from "react-router";

const SubNavigation = () => {
  const [isClicked , setIsClicked] = useState("Flights")
  const navigate = useNavigate()
  const handleHotelNavigation = ()=>{
    navigate("/hotelsearch")
    setIsClicked("Hotels")
  }
  const handleFlightNavigation = ()=>{
    navigate("/")
    setIsClicked("Flights")
  }
  const handleTrainNavigation =()=>{
    navigate("/trainsearch")
    setIsClicked("Trains")
  }
  const handleBusNavigation =()=>{
    navigate("/bussearch")
    setIsClicked("Buses")
  }
  const handleCommingSoonNavigationHomestay = ()=>{
    navigate("/commingsoonsearch")
    setIsClicked("Homestays")
  }
  const handleCommingSoonNavigationHoliday = ()=>{
    navigate("/commingsoonsearch")
    setIsClicked("Holiday")
  }
  const handleCommingSoonNavigationCabs = ()=>{
    navigate("/commingsoonsearch")
    setIsClicked("Cabs")
  }
  const handleCommingSoonNavigationForex = ()=>{
    navigate("/commingsoonsearch")
    setIsClicked("ForexCard")
  }
  const handleCommingSoonNavigationTravel = ()=>{
    navigate("/commingsoonsearch")
    setIsClicked("Travel")
  }
  return (
    <div className="SubNavigation_Parent_div">
      <div className="SubNavigation_child_div">
        <ul>
          <li onClick={handleFlightNavigation}>
            <span>
              <div className="SubNavigation_flightsImg_div">
                <img
                  className="SubNavigation_flightsImg"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span style={isClicked === "Flights" ? { color: "#008cff" } : {}}>Flights</span>
              {isClicked === "Flights" ? (<hr  style={{height: "2px" , backgroundColor:"#008cff", border:"none", marginTop:"18px"}} ></hr>) : ""}
            </span>
          </li>
          <li onClick={handleHotelNavigation}>
            <span>
              <div className="SubNavigation_HotelsImg_div">
                <img
                  className="SubNavigation_Hotels_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span style={isClicked === "Hotels" ? { color: "#008cff" } : {}}>Hotels</span>
              {isClicked === "Hotels" ? (<hr  style={{height: "2px" , backgroundColor:"#008cff", border:"none",marginTop:"18px"}} ></hr>) : ""}
            </span>
          </li>
          <li onClick={handleCommingSoonNavigationHomestay}>
            <span>
              <div className="SubNavigation_HomeStayImg_div">
                <img
                  className="SubNavigation_HomeStay_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>
                HomeStays <br></br> & villas
              </span>
              {isClicked === "Homestays" ? (<hr  style={{height: "2px" , backgroundColor:"#008cff", border:"none"}} ></hr>) : ""}
            </span>
          </li>
          <li onClick={handleCommingSoonNavigationHoliday}>
            <span>
              <div className="SubNavigation_HolidaysImg_div">
                <img
                  className="SubNavigation_Holidays_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>
                Holiday <br></br> Packages
              </span>
              {isClicked === "Holiday" ? (<hr  style={{height: "2px" , backgroundColor:"#008cff", border:"none"}} ></hr>) : ""}
            </span>
          </li>
          <li onClick={handleTrainNavigation}>
            <span>
              <div className="SubNavigation_trainImg_div">
                <img
                  className="SubNavigation_trian_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span style={isClicked === "Trains" ? {color: "#008cff" } : {}}>Trains</span>
              {isClicked === "Trains" ? (<hr  style={{height: "2px" , backgroundColor:"#008cff",border:"none",marginTop:"20px"}} ></hr>) : ""}
            </span>
          </li>
          <li onClick={handleBusNavigation}>
            <span>
              <div className="SubNavigation_BusesImg_div">
                <img
                  className="SubNavigation_Buses_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span style={isClicked === "Buses" ? {  color: "#008cff" } : {}}>Buses</span>
              {isClicked === "Buses" ? (<hr  style={{height: "2px" , backgroundColor:"#008cff", border:"none",marginTop:"20px"}} ></hr>) : ""}
            </span>
          </li>
          <li onClick={handleCommingSoonNavigationCabs}>
            <span>
              <div className="SubNavigation_cabsImg_div">
                <img
                  className="SubNavigation_cabs_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>Cabs</span>
              {isClicked === "Cabs" ? (<hr  style={{height: "2px" , backgroundColor:"#008cff", border:"none",marginTop:"20px"}} ></hr>) : ""}
            </span>
          </li>
          <li onClick={handleCommingSoonNavigationForex}>
            <span>
              <div className="SubNavigation_forexImg_div">
                <img
                  className="SubNavigation_forex_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>
                ForexCard <br></br> & Currency
              </span>
              {isClicked === "ForexCard" ? (<hr  style={{height: "2px" , backgroundColor:"#008cff", border:"none"}} ></hr>) : ""}
            </span>
          </li>
          <li onClick={handleCommingSoonNavigationTravel}>
            <span>
            <div className="SubNavigation_TravelImg_div">
                <img
                  className="SubNavigation_travel_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>
                Travel <br></br> Insurance
              </span>
              {isClicked === "Travel" ? (<hr  style={{height: "2px" , backgroundColor:"#008cff", border:"none"}} ></hr>) : ""}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubNavigation;
