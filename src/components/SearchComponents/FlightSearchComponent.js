import React, { useState } from "react";
import "./FlightSearchComponent.css";
import SubNavigation from "../NavigationBar/SubNavigation/SubNavigation";
import Offers from "../Offers/Offers";
import ParentHeader from "../NavigationBar/ParentHeader/ParentHeader";
import PrimaryNavigation from "../NavigationBar/PrimaryNavigation/PrimaryNavigation";
import TravellersAndClass from "../ExtraComponents/TravellersAndClass/TravellersAndClass";
import FlightsFrom from "../ExtraComponents/FlightsFromToInput/FlightsFrom";
import { useAuth } from "../context/MyContext";
import FlightsTo from "../ExtraComponents/FlightsFromToInput/FlightsTo";
import DatePicker from "../ExtraComponents/DatePicker/DatePicker";
import { useNavigate } from "react-router";
import moment from "moment";
import FooterComponent from "../ExtraComponents/FooterComponent/FooterComponent";
const FlightSearchComponent = () => {
  const [selectedOption, setSelectedOption] = useState("oneWay");
  const [showTravellersAndClass, setShowTravellersAndClass] = useState(false);
  const [flightFromOpen, setFlightFromOpen] = useState(false);
  const [flightToOpen, setFlightToOpen] = useState(false);
  const { AirportFrom, AirportTo, travellersCount, travelDay, setFlightData } =
    useAuth();
  const navigate = useNavigate();
  const currentDate = new Date().toISOString().slice(0, 10);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleFlightFormOpen = () => {
    setFlightFromOpen(!flightFromOpen);
  };
  const handleFlightToOpen = () => {
    setFlightToOpen(!flightToOpen);
  };
  const toggleTravellersAndClass = () => {
    setShowTravellersAndClass(!showTravellersAndClass);
  };
  const HandleFlightSearch = () => {
    const dayAbbreviation = moment(travelDay).format("ddd");
    const api = `https://academics.newtonschool.co/api/v1/bookingportals/flight?day=${dayAbbreviation}&search={"source":"${AirportFrom[2]}","destination":"${AirportTo[2]}"}`;
    const projectId = "laa8easa5t57";
    fetch(api, {
      headers: {
        projectID: projectId,
      },
    })
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        setFlightData(data.data.flights);
        localStorage.setItem("flightsData", JSON.stringify(data.data.flights));
        console.log(data);
        // console.log(AirportFrom)
        // console.log(AirportTo);
        navigate("/flightdatapage");
      });
  };
  return (
    <div className="FlightSearchComponenet_Parent">
      <PrimaryNavigation />
      <ParentHeader />
      <SubNavigation />
      <div className="FlightSearchComponenet_Child">
        <div className="FlightSearchComponent_Child_radio">
          <ul className="FlightSearchComponent_Child_radio_innerUl">
            <li>
              <input
                type="radio"
                id="oneWay"
                name="flightOption"
                checked={selectedOption === "oneWay"}
                onChange={() => handleOptionChange("oneWay")}
              />
              <label htmlFor="oneWay">One Way</label>
            </li>
            <li>
              <input
                type="radio"
                id="roundTrip"
                name="flightOption"
                checked={selectedOption === "roundTrip"}
                onChange={() => handleOptionChange("roundTrip")}
              />
              <label htmlFor="roundTrip">Round Trip</label>
            </li>
            <li>
              <input
                type="radio"
                id="multiCity"
                name="flightOption"
                checked={selectedOption === "multiCity"}
                onChange={() => handleOptionChange("multiCity")}
              />
              <label htmlFor="multiCity">Multi City</label>
            </li>
          </ul>
          <p>Book International And Domestic Flights</p>
        </div>
        <div className="FlightSearchComponenet_Child_Input_detail">
          <div className="FlightSearchComponenet_Child_Destination_Input">
            <div
              onClick={handleFlightFormOpen}
              className="FlightSearchComponenet_Child_FromInput"
            >
              <span>From</span>
              <span className="FlightSearchComponenet_Child_FromInput_From">
                {AirportFrom[0]}
              </span>
              <span>{AirportFrom[1]}</span>
            </div>
            {flightFromOpen && <FlightsFrom onclose={handleFlightFormOpen} />}
            <div
              onClick={handleFlightToOpen}
              className="FlightSearchComponenet_Child_ToInput"
            >
              <span>To</span>
              <span className="FlightSearchComponenet_Child_ToInput_From">
                {AirportTo[0]}
              </span>
              <span>{AirportTo[1]}</span>
            </div>
            {flightToOpen && <FlightsTo onclose={handleFlightToOpen} />}
            <div className="FlightSearchComponenet_Child_Departure">
              <span>Departure</span>
              {/* <DatePicker /> */}
              <DatePicker />
              <span></span>
            </div>
            <div
              onClick={toggleTravellersAndClass}
              className="FlightSearchComponenet_Child_Traveller_Class"
            >
              <span>Travellers & Class</span>
              <span
                style={{
                  fontSize: "30px",
                  marginRight: "20px",
                  marginTop: "10px",
                }}
              >
                {travellersCount}{" "}
                <span style={{ fontWeight: "bolder", fontSize: "26px" }}>
                  Travellers
                </span>
              </span>
            </div>
            {showTravellersAndClass && (
              <TravellersAndClass onclose={toggleTravellersAndClass} />
            )}
          </div>
        </div>
        {/* work on this button */}
        <button
          className="FlightSearchComponenet_Button"
          onClick={HandleFlightSearch}
        >
          SEARCH
        </button>
        {/* <div className="explore_section">
          <div className="explore_option">1</div>
          <div className="explore_option">1</div>
          <div className="explore_option">1</div>
          <div className="explore_option">1</div>
          <div className="explore_option">1</div>
        </div> */}
        <div className="flight_add">
          <img
            src="https://platforms.makemytrip.com/contents/5eec1a99-d3f3-48ec-9a35-db1d8acf2922"
            alt=".."
          />
        </div>
      </div>
      <Offers />
      <FooterComponent />
    </div>
  );
};
export default FlightSearchComponent;
