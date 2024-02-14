import React, { useEffect, useState } from "react";
import "./HotelSearchComponent.css";
import SubNavigation from "../NavigationBar/SubNavigation/SubNavigation";
import Offers from "../Offers/Offers";
import ParentHeader from "../NavigationBar/ParentHeader/ParentHeader";
import PrimaryNavigation from "../NavigationBar/PrimaryNavigation/PrimaryNavigation";
import HotelInput from "../ExtraComponents/HotelCityInput/HotelCityInput";
import { useAuth } from "../context/MyContext";
import HotelGuestsAndRoom from "../ExtraComponents/HotelGuestAndRoom/HotelGuestsAndRoom";
import { useNavigate } from "react-router";

const HotelSearchComponent = () => {
  const [flightToOpen, setFlightToOpen] = useState(false);
  const { hotelCity, hotelRoomNo, hotelAdultNo } = useAuth();
  const [isHotelGuestOpen, setIsHotelGuestOpen] = useState(false);
  const navigate = useNavigate();
  const handleFlightCityInput = () => {
    setFlightToOpen(!flightToOpen);
  };
  const handleOpenHotelGuests = () => {
    setIsHotelGuestOpen(!isHotelGuestOpen);
  };
  const handleGetHotelData = () => {
    navigate("/hoteldatapage");
  };

  return (
    <div className="HotelSearchComponenet_Parent">
      <PrimaryNavigation />
      <ParentHeader />
      <SubNavigation />
      <div className="HotelSearchComponenet_Child">
        <div className="FlightSearchComponent_Child_radio">
          <p>Book Domestic and International Property Online. </p>
        </div>
        <div className="HotelSearchComponenet_Child_Input_detail">
          <div className="HotelSearchComponenet_Child_Destination_Input">
            <div
              onClick={handleFlightCityInput}
              className="HotelSearchComponenet_Child_FromInput"
            >
              <span>City</span>
              <span className="HotelSearchComponenet_Child_FromInput_From">
                {hotelCity}
              </span>
            </div>
            {flightToOpen && <HotelInput onClose={handleFlightCityInput} />}
            <div className="HotelSearchComponenet_Child_ToInput">
              <span>Check-In</span>
              <input
                style={{
                  border: "none",
                  padding:"5px",
                  background:"transparent"
                }}
                type="date"
                placeholder="Select a date"
              />
              <span></span>
            </div>
            <div className="HotelSearchComponenet_Child_Departure">
              <span>Check-Out</span>
              <input
                style={{
                  border: "none",
                  padding:"5px",
                  background:"transparent"
                }}
                type="date"
                placeholder="Select a date"
              />
              <span></span>
            </div>
            <div
              onClick={handleOpenHotelGuests}
              className="HotelSearchComponenet_Child_Traveller_Class"
            >
              <span>Guests and Rooms </span>
              <span
                style={{
                  fontSize: "30px",
                  marginRight: "20px",
                  marginTop: "10px",

                }}
              >
                <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
                  {hotelRoomNo} Rooms {hotelAdultNo} Adults
                </span>
              </span>
            </div>
            {isHotelGuestOpen && (
              <HotelGuestsAndRoom onClose={handleOpenHotelGuests} />
            )}
          </div>
        </div>
        <button
          onClick={handleGetHotelData}
          className="HotelSearchComponenet_Button"
        >
          SEARCH
        </button>
      </div>
      <Offers />
    </div>
  );
};
export default HotelSearchComponent;
