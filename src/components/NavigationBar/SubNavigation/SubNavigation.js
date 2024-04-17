import React, { useEffect, useState } from "react";
import "./SubNavigation.css";
import { useNavigate } from "react-router";

const SubNavigation = () => {
  const [isClicked, setIsClicked] = useState(
    localStorage.getItem("clicked") || "Flights"
  );
  const navigate = useNavigate();

  const handleHotelNavigation = () => {
    navigate("/hotelsearch");
    localStorage.setItem("clicked", "Hotels");
  };
  const handleFlightNavigation = () => {
    navigate("/");
    localStorage.setItem("clicked", "Flights");
  };
  const handleTrainNavigation = () => {
    navigate("/trainsearch");
    localStorage.setItem("clicked", "Trains");
  };
  const handleBusNavigation = () => {
    navigate("/bussearch");
    localStorage.setItem("clicked", "Buses");
  };
  const handleCommingSoonNavigationHomestay = () => {
    navigate("/commingsoonsearch");
    localStorage.setItem("clicked", "Homestays");
  };
  const handleCommingSoonNavigationHoliday = () => {
    navigate("/commingsoonsearch");
    localStorage.setItem("clicked", "Holiday");
  };
  const handleCommingSoonNavigationCabs = () => {
    navigate("/commingsoonsearch");
    localStorage.setItem("clicked", "Cabs");
  };
  const handleCommingSoonNavigationForex = () => {
    navigate("/commingsoonsearch");
    localStorage.setItem("clicked", "ForexCard");
  };
  const handleCommingSoonNavigationTravel = () => {
    navigate("/commingsoonsearch");
    localStorage.setItem("clicked", "Travel");
  };

  useEffect(() => {
    // localStorage.setItem("clicked", isClicked);
    // handleFlightNavigation();
    // handleBusNavigation();
  }, []);

  return (
    <div className="SubNavigation_Parent_div">
      <div className="SubNavigation_child_div">
        <ul>
          <li onClick={handleFlightNavigation} className="clickable">
            <span>
              <div className="SubNavigation_flightsImg_div">
                <img
                  className="SubNavigation_flightsImg"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span
                style={
                  localStorage.getItem("clicked") === "Flights"
                    ? { color: "#008cff", fontWeight: "bold" }
                    : {}
                }
              >
                Flights
              </span>
              {localStorage.getItem("clicked") === "Flights" ? (
                <hr
                  style={{
                    height: "3px",
                    backgroundColor: "#008cff",
                    border: "none",
                    marginTop: "18px",
                  }}
                ></hr>
              ) : (
                ""
              )}
            </span>
          </li>
          <li onClick={handleHotelNavigation} className="clickable">
            <span>
              <div className="SubNavigation_HotelsImg_div">
                <img
                  className="SubNavigation_Hotels_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span
                style={
                  localStorage.getItem("clicked") === "Hotels"
                    ? { color: "#008cff", fontWeight: "bold" }
                    : {}
                }
              >
                Hotels
              </span>
              {localStorage.getItem("clicked") === "Hotels" ? (
                <hr
                  style={{
                    height: "3px",
                    backgroundColor: "#008cff",
                    border: "none",
                    marginTop: "18px",
                  }}
                ></hr>
              ) : (
                ""
              )}
            </span>
          </li>
          <li
            onClick={handleCommingSoonNavigationHomestay}
            className="clickable_1"
          >
            <span className="SubNavigation_li__">
              <div className="SubNavigation_HomeStayImg_div">
                <img
                  className="SubNavigation_HomeStay_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>
                HomeStays <br></br> & villas
              </span>
              {localStorage.getItem("clicked") === "Homestays" ? (
                <hr
                  style={{
                    height: "3px",
                    backgroundColor: "#008cff",
                    border: "none",
                  }}
                ></hr>
              ) : (
                ""
              )}
            </span>
          </li>
          <li
            onClick={handleCommingSoonNavigationHoliday}
            className="clickable_1"
          >
            <span className="SubNavigation_li__">
              <div className="SubNavigation_HolidaysImg_div">
                <img
                  className="SubNavigation_Holidays_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>
                Holiday <br></br> Packages
              </span>
              {localStorage.getItem("clicked") === "Holiday" ? (
                <hr
                  style={{
                    height: "3px",
                    backgroundColor: "#008cff",
                    border: "none",
                  }}
                ></hr>
              ) : (
                ""
              )}
            </span>
          </li>
          <li onClick={handleTrainNavigation} className="clickable">
            <span>
              <div className="SubNavigation_trainImg_div">
                <img
                  className="SubNavigation_trian_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span
                style={
                  localStorage.getItem("clicked") === "Trains"
                    ? { color: "#008cff", fontWeight: "bold" }
                    : {}
                }
              >
                Trains
              </span>
              {localStorage.getItem("clicked") === "Trains" ? (
                <hr
                  style={{
                    height: "3px",
                    backgroundColor: "#008cff",
                    border: "none",
                    marginTop: "20px",
                  }}
                ></hr>
              ) : (
                ""
              )}
            </span>
          </li>
          <li onClick={handleBusNavigation} className="clickable">
            <span>
              <div className="SubNavigation_BusesImg_div">
                <img
                  className="SubNavigation_Buses_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span
                style={
                  localStorage.getItem("clicked") === "Buses"
                    ? { color: "#008cff", fontWeight: "bold" }
                    : {}
                }
              >
                Buses
              </span>
              {localStorage.getItem("clicked") === "Buses" ? (
                <hr
                  style={{
                    height: "3px",
                    backgroundColor: "#008cff",
                    border: "none",
                    marginTop: "20px",
                  }}
                ></hr>
              ) : (
                ""
              )}
            </span>
          </li>
          <li onClick={handleCommingSoonNavigationCabs} className="clickable_1">
            <span className="SubNavigation_li__">
              <div className="SubNavigation_cabsImg_div">
                <img
                  className="SubNavigation_cabs_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span
                style={
                  localStorage.getItem("clicked") === "Cabs"
                    ? { color: "#008cff" }
                    : {}
                }
              >
                Cabs
              </span>
              {localStorage.getItem("clicked") === "Cabs" ? (
                <hr
                  style={{
                    height: "3px",
                    backgroundColor: "#008cff",
                    border: "none",
                    marginTop: "20px",
                  }}
                ></hr>
              ) : (
                ""
              )}
            </span>
          </li>
          <li
            onClick={handleCommingSoonNavigationForex}
            className="clickable_1"
          >
            <span className="SubNavigation_li__">
              <div className="SubNavigation_forexImg_div">
                <img
                  className="SubNavigation_forex_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>
                ForexCard <br></br> & Currency
              </span>
              {localStorage.getItem("clicked") === "ForexCard" ? (
                <hr
                  style={{
                    height: "3px",
                    backgroundColor: "#008cff",
                    border: "none",
                  }}
                ></hr>
              ) : (
                ""
              )}
            </span>
          </li>
          <li
            onClick={handleCommingSoonNavigationTravel}
            className="clickable_1"
          >
            <span className="SubNavigation_li__">
              <div className="SubNavigation_TravelImg_div">
                <img
                  className="SubNavigation_travel_Img"
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/B2CHeaderSprite.png"
                />
              </div>
              <span>
                Travel <br></br> Insurance
              </span>
              {localStorage.getItem("clicked") === "Travel" ? (
                <hr
                  style={{
                    height: "3px",
                    backgroundColor: "#008cff",
                    border: "none",
                  }}
                ></hr>
              ) : (
                "Travel"
              )}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubNavigation;
