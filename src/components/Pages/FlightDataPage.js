import React, { useEffect, useState } from "react";
import "./FlightDataPage.css";
import SecondaryNav2 from "../NavigationBar/SecondaryNavigation/SecondaryNav2";
import FlightDetail from "../FlightDetail/FlightDetails";
import { useAuth } from "../context/MyContext";
import FlightFrom from "../ExtraComponents/FlightsFromToInput/FlightsFrom";
import FlightTo from "../ExtraComponents/FlightsFromToInput/FlightsTo";
import TravellersAndClasses from "../ExtraComponents/TravellersAndClass/TravellersAndClass";
import moment from "moment";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router";
import Login from "../LoginSignUp/Login";

function FlightDataPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [flightDetailOpen, setFlightDetailOpen] = useState({});
  const navigate = useNavigate();
  const {
    AirportFrom,
    AirportTo,
    setFlightId,
    travellersCount,
    travelDay,
    setTravelDay,
    setFlightBookingId,
  } = useAuth();
  const [FlightFromOpen, setFlightfromOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [FlightToOpen, SetFlightToOpen] = useState(false);
  const [travellersAndClassesOpen, setTravellersAndClassesOpen] =
    useState(false);
  const [value, setValue] = useState("$gte");
  const [field, setField] = useState("ticketPrice");
  const [sliderValue, setSliderValue] = useState(100);
  const jwtToken = localStorage.getItem("jwtToken");

  const handleCheckboxRatingChange = (value) => {
    setSliderValue(value === sliderValue ? "" : value);
    if (value === sliderValue) {
      getInitialFlightData();
    }
  };

  const handleClickSet = (type, key, data) => {
    setField(type);
    setValue(key);
    setSliderValue(data);
    console.log(field);
    console.log(value);
    console.log(sliderValue);
  };

  const getFlightData = () => {
    const dayAbbreviation = moment(travelDay).format("ddd");
    const api = `https://academics.newtonschool.co/api/v1/bookingportals/flight?day=${dayAbbreviation}&search={"source":"${AirportFrom[2]}","destination":"${AirportTo[2]}"}&filter={"${field}":{"${value}":${sliderValue}}}`;
    const projectId = "laa8easa5t57";

    fetch(api, {
      headers: {
        projectID: projectId,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.data.flights);
      })
      .catch((error) => console.error("Error fetching flight data:", error));
  };
  const getInitialFlightData = () => {
    const dayAbbreviation = moment(travelDay).format("ddd");
    const api = `https://academics.newtonschool.co/api/v1/bookingportals/flight?day=${dayAbbreviation}&search={"source":"${AirportFrom[2]}","destination":"${AirportTo[2]}"}`;
    const projectId = "laa8easa5t57";

    fetch(api, {
      headers: {
        projectID: projectId,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.data.flights);
      })
      .catch((error) => console.error("Error fetching flight data:", error));
  };

  useEffect(() => {
    getFlightData();
  }, [sliderValue]);

  const CustomInput = ({ value, onClick }) => (
    <input
      className="w-full border-none focus:outline-none text-sm cursor-pointer p-[1px] bg-[#ffffff00] text-[#008cff]"
      type="text"
      value={moment(value).format("ddd")}
      onClick={onClick}
      readOnly
    />
  );

  const handleFlightDetailOpen = (flightId) => {
    // Implement the function to toggle flight detail visibility
    setFlightDetailOpen((prev) => ({
      ...prev,
      [flightId]: !prev[flightId],
    }));
    setFlightId(flightId);
  };

  const handleFlightfromOpen = () => {
    setFlightfromOpen(!FlightFromOpen);
  };

  const handleFlightToOpen = () => {
    SetFlightToOpen(!FlightToOpen);
  };

  const handleTravellersAndClassesOpen = () => {
    setTravellersAndClassesOpen(!travellersAndClassesOpen);
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleFlightBookNow = (flight_id) => {
    if (jwtToken != null) {
      navigate("/bookingpageflight");
      setFlightBookingId(flight_id);
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginclose = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="FlightDataPage_Parent_Div">
      <SecondaryNav2 />
      <div className="FlightDataPage_SearchBar_parent">
        <div className="FlightDataPage_SearchBar">
          <div
            onClick={handleFlightfromOpen}
            className="FlightDataPage_SearchBar_From_div"
          >
            <h3>From</h3>
            <p>{AirportFrom[0]}</p>
          </div>
          {FlightFromOpen && (
            <div style={{ position: "relative", left: "-160px", top: "-35px" }}>
              <FlightFrom onclose={handleFlightfromOpen} />
            </div>
          )}
          <div
            onClick={handleFlightToOpen}
            className="FlightDataPage_SearchBar_To_div"
          >
            <h3>To</h3>
            <p>{AirportTo[0]}</p>
          </div>
          {FlightToOpen && (
            <div style={{ position: "relative", left: "-450px", top: "-35px" }}>
              <FlightTo onclose={handleFlightToOpen} />
            </div>
          )}
          <div className="FlightDataPage_SearchBar_Depart_div">
            <h3>Departure</h3>
            <DatePicker
              selected={travelDay}
              onChange={(date) => setTravelDay(date)}
              customInput={<CustomInput />}
            />
          </div>
          <div
            onClick={handleTravellersAndClassesOpen}
            className="FlightDataPage_SearchBar_Passenger_div"
          >
            <h3>Passenger</h3>
            <p>{travellersCount} Passengers</p>
          </div>
          {travellersAndClassesOpen && (
            <div
              style={{ position: "relative", top: "140px", left: "-1000px" }}
            >
              <TravellersAndClasses onclose={handleTravellersAndClassesOpen} />
            </div>
          )}
          <button
            onClick={getFlightData}
            className="FlightDataPage_Child_Div_Button"
          >
            SEARCH
          </button>
        </div>
      </div>
      <div className="FlightDataPage_Child_Div">
        {/* <div className="flight_img_img">img</div> */}
        <div className="FlightDataPage_FilterAndData_div">
          <div className="FlightDataPage_Filter_div">
            <div className="FlightDataPage_Filter_Slider">
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
                for="slider"
              >
                One Way Price
              </label>
              <input
                type="range"
                id="slider"
                name="slider"
                min="0"
                max="2500"
                value={sliderValue}
                onChange={handleSliderChange}
                onClick={() => handleClickSet("ticketPrice", "$gte")}
              />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <p>Min: 2000</p>
                <p>Max: 25000</p>
              </div>
            </div>
            <div className="FlightDataPage_Filter_Stop">
              <h3>Stops From {AirportFrom[0]}</h3>
              <div className="FlightDataPage_Filter_Stop_checkBox">
                <div className="FlightDataPage_Filter_Stop_checkBox_input">
                  <input
                    type="checkbox"
                    value="0"
                    checked={sliderValue === "0"}
                    onChange={() => handleCheckboxRatingChange("0")}
                    onClick={() => handleClickSet("stops", "$eq", "0")}
                  />
                  <label>Non Stop</label>
                </div>
                <p style={{ marginTop: "10px" }}></p>
              </div>
              <div className="FlightDataPage_Filter_Stop_checkBox">
                <div className="FlightDataPage_Filter_Stop_checkBox_input">
                  <input
                    type="checkbox"
                    value="1"
                    checked={sliderValue === "1"}
                    onChange={() => handleCheckboxRatingChange("1")}
                    onClick={() => handleClickSet("stops", "$eq", "1")}
                  />
                  <label>1 Stop</label>
                </div>
                <p style={{ marginTop: "10px" }}></p>
              </div>
              <div className="FlightDataPage_Filter_Stop_checkBox">
                <div className="FlightDataPage_Filter_Stop_checkBox_input">
                  <input
                    type="checkbox"
                    value="2"
                    checked={sliderValue === "2"}
                    onChange={() => handleCheckboxRatingChange("2")}
                    onClick={() => handleClickSet("stops", "$eq", "2")}
                  />
                  <label>2 Stop</label>
                </div>
                <p style={{ marginTop: "10px" }}></p>
              </div>
            </div>
            <div className="FlightDataPage_Filter_Stop">
              <h3>Duration</h3>
              <div className="FlightDataPage_Filter_Stop_checkBox">
                <div className="FlightDataPage_Filter_Stop_checkBox_input">
                  <input
                    type="checkbox"
                    value="1"
                    checked={sliderValue === 1}
                    onChange={() => handleCheckboxRatingChange(1)}
                    onClick={() => handleClickSet("duration", "$eq", 1)}
                  />
                  <label>1 hour</label>
                </div>
                <p style={{ marginTop: "10px" }}></p>
              </div>
              <div className="FlightDataPage_Filter_Stop_checkBox">
                <div className="FlightDataPage_Filter_Stop_checkBox_input">
                  <input
                    type="checkbox"
                    value="2"
                    checked={sliderValue === 2}
                    onChange={() => handleCheckboxRatingChange(2)}
                    onClick={() => handleClickSet("duration", "$eq", 2)}
                  />
                  <label>2 hour</label>
                </div>
                <p style={{ marginTop: "10px" }}></p>
              </div>
              <div className="FlightDataPage_Filter_Stop_checkBox">
                <div className="FlightDataPage_Filter_Stop_checkBox_input">
                  <input
                    type="checkbox"
                    value="3"
                    checked={sliderValue === 3}
                    onChange={() => handleCheckboxRatingChange(3)}
                    onClick={() => handleClickSet("duration", "$eq", 3)}
                  />
                  <label>3 hour</label>
                </div>
                <p style={{ marginTop: "10px" }}></p>
              </div>
              <div className="FlightDataPage_Filter_Stop_checkBox">
                <div className="FlightDataPage_Filter_Stop_checkBox_input">
                  <input
                    type="checkbox"
                    value="4"
                    checked={sliderValue === 4}
                    onChange={() => handleCheckboxRatingChange(4)}
                    onClick={() => handleClickSet("duration", "$eq", 4)}
                  />
                  <label>4 hour</label>
                </div>
                <p style={{ marginTop: "10px" }}></p>
              </div>
              <div className="FlightDataPage_Filter_Stop_checkBox">
                <div className="FlightDataPage_Filter_Stop_checkBox_input">
                  <input
                    type="checkbox"
                    value="5"
                    checked={sliderValue === 5}
                    onChange={() => handleCheckboxRatingChange(5)}
                    onClick={() => handleClickSet("duration", "$eq", 5)}
                  />
                  <label>5 hour</label>
                </div>
                <p style={{ marginTop: "10px" }}></p>
              </div>
              <div className="FlightDataPage_Filter_Stop_checkBox">
                <div className="FlightDataPage_Filter_Stop_checkBox_input">
                  <input
                    type="checkbox"
                    value="6"
                    checked={sliderValue === 6}
                    onChange={() => handleCheckboxRatingChange(6)}
                    onClick={() => handleClickSet("duration", "$eq", 6)}
                  />
                  <label>6 hour</label>
                </div>
                <p style={{ marginTop: "10px" }}></p>
              </div>
            </div>
            <div className="FlightDataPage_Filter_Departure">
              <h3>Departure From {AirportFrom[0]}</h3>
              <div className="FlightDataPage_Filter_Departure-uldiv">
                <ul>
                  <li
                    onClick={() => handleClickSet("departureTime", "$lt", "6")}
                  >
                    <img
                      style={{ height: "40px" }}
                      src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/morning_inactive.png"
                    />
                    before 6pm
                  </li>
                  <li
                    onClick={() =>
                      handleClickSet("departureTime", "$lte", "12")
                    }
                  >
                    <img
                      style={{ height: "40px" }}
                      src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/noon_inactive.png"
                    />
                    6am - 12pm
                  </li>
                  <li
                    onClick={() =>
                      handleClickSet("departureTime", "$lte", "18")
                    }
                  >
                    <img
                      style={{ height: "40px" }}
                      src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/evening_inactive.png"
                    />
                    12pm - 6pm
                  </li>
                  <li
                    onClick={() =>
                      handleClickSet("departureTime", "$gte", "18")
                    }
                  >
                    <img
                      style={{ height: "40px" }}
                      src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/night_inactive.png"
                    />
                    after 6pm
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="FlightDataPage_data_div">
            <h3
              className="fd_h"
              style={{ fontSize: "25px", marginLeft: "10px" }}
            >
              Flights From {AirportFrom[0]} to {AirportTo[0]}
            </h3>
            {searchResults &&
              searchResults.map((flightApidata) => (
                <div className="FlightDataPage_data" key={flightApidata._id}>
                  <div className="w-[100%] h-[100px] flex justify-center items-center">
                    <div className="w-[95%] h-[93%] flex flex-row gap-[15px]">
                      <div className="h-[100%] w-[15%] flex items-center">
                        <span className="text-[12px] text-[#333]">
                          {flightApidata?.flightID}
                        </span>
                      </div>
                      <div className="h-[100%] w-[40%] flex gap-[7px]">
                        <div className=" w-[28%] flex flex-col justify-center items-center">
                          <div className="text-[20px] text-[#333] font-[600] ">
                            {flightApidata?.departureTime}
                          </div>
                          <div className="text-[13px]  text-[#737373] font-[600]">
                            {/* <span>{AirportFrom[0]}</span> */}
                          </div>
                        </div>
                        <div className=" w-[40%] flex flex-col items-center justify-center">
                          <div className="text-[13px] w-[83%] text-[#333] flex justify-center">
                            <span>{flightApidata?.duration}h 10m</span>
                          </div>
                          <img src="https://flight.easemytrip.com/Content/img/arow_main.png" />
                          <div className="text-[11px] w-[83%] text-[#737373] flex items-center justify-center">
                            <span>
                              {flightApidata?.stops == 0 ? (
                                "Nonstop"
                              ) : (
                                <span>{flightApidata?.stops}-stop</span>
                              )}
                            </span>
                          </div>
                        </div>
                        <div className=" w-[28%] flex flex-col justify-center items-center">
                          <div className="text-[20px] text-[#333] font-[600] ">
                            {flightApidata?.arrivalTime}
                          </div>
                          <div className="text-[13px]  text-[#737373] font-[600]">
                            {/* <span>{AirportTo[0]}</span> */}
                          </div>
                        </div>
                      </div>
                      <div className=" h-[100%] w-[20%] flex flex-col items-center justify-center">
                        <div className="text-[20px] w-[83%] font-[600] flex justify-center  gap-[5px]">
                          <i>₹</i> <span>{flightApidata?.ticketPrice}</span>
                        </div>
                        <div className="text-[11px] w-[83%] text-[#737373] flex justify-center">
                          {flightApidata?.availableSeats} Seats Left
                        </div>
                      </div>
                      <div className="h-[100%] w-[20%] flex justify-center items-center">
                        <p
                          onClick={() => handleFlightBookNow(flightApidata._id)}
                          className="bg-[#53b2fe] rounded-[40px] text-[14px] text-[#fff] w-[90%] h-[40%] flex justify-center items-center cursor-pointer text-center"
                        >
                          Book Now
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-[30px] flex justify-center items-center bg-[#EFF3F6]">
                    <div className="w-[98%] h-[100%] text-[#2196f3] text-[12px] font-[600] flex items-center justify-end mr-6">
                      <p
                        onClick={() =>
                          handleFlightDetailOpen(flightApidata._id)
                        }
                        className=" cursor-pointer "
                      >
                        {flightDetailOpen[flightApidata._id]
                          ? "Hide Detail"
                          : "Flight Detail"}
                      </p>
                    </div>
                  </div>
                  {flightDetailOpen[flightApidata._id] && <FlightDetail />}
                </div>
              ))}
          </div>
        </div>
      </div>
      {showLogin && <Login onClose={handleLoginclose} />}
    </div>
  );
}

export default FlightDataPage;
