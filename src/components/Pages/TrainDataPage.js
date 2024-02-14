import React, { useEffect, useState } from "react";
import "./TrainDataPage.css";
import SecondaryNav2 from "../NavigationBar/SecondaryNavigation/SecondaryNav2";
import { useAuth } from "../context/MyContext";
import TrainFromInput from "../ExtraComponents/TrainFromToInput/TrainFromInput";
import TrainToInput from "../ExtraComponents/TrainFromToInput/TrainToInput";
import moment from "moment";
import DatePicker from "react-datepicker";
import Login from "../LoginSignUp/Login";
import { useNavigate } from "react-router";

function TrainDataPage() {
  const [availableTrains, setAvailableTrains] = useState([]);
  const {
    trainJunctionFrom,
    trainJunctionTo,
    travelDay,
    setTravelDay,
    setTrainBookingId,
  } = useAuth();
  const navigate = useNavigate();
  const [TrainToOpen, SetTrainToOpen] = useState(false);
  const [trainFromOpen, SetTrainFromOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("rating"); // Default sorting by rating
  const [sortOrder, setSortOrder] = useState(-1);
  const [selectedOption, setSelectedOption] = useState(0);
  const [value, setValue] = useState("$gte");
  const [field, setField] = useState("fare");
  const jwtToken = localStorage.getItem("jwtToken");
  const [showLogin, setShowLogin] = useState(false);

  const fetchTrainData = async () => {
    try {
      const dayAbbreviation = moment(travelDay).format("ddd");
      const api = `https://academics.newtonschool.co/api/v1/bookingportals/train?&day=${dayAbbreviation}&search={"source":"${trainJunctionFrom}","destination":"${trainJunctionTo}"}&filter={"${field}":{"${value}":${selectedOption}}}`;
      const projectId = "laa8easa5t57";
      const response = await fetch(api, {
        headers: {
          projectID: projectId,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAvailableTrains(data.data.trains);
    } catch (error) {
      console.error("Error fetching train data:", error);
    }
  };
  const handleClickSet = (type, key, data) => {
    setField(type);
    setValue(key === value ? "$gte" : key);
    setSelectedOption(data);
  };
  const handleCheckboxRatingChange = (value) => {
    setSelectedOption(value === selectedOption ? 0 : value);
  };

  const handleTrainsort = async () => {
    try {
      const dayAbbreviation = moment(travelDay).format("ddd");
      const api = `https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"${trainJunctionFrom}","destination":"${trainJunctionTo}"}&day=${dayAbbreviation}&sort={"${sortCriteria}":${sortOrder}}`;
      const projectId = "wan6hnsnhwfn";
      const response = await fetch(api, {
        headers: {
          projectID: projectId,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAvailableTrains(data.data.trains);
      console.log(data);
    } catch (error) {
      console.error("Error fetching train data:", error);
    }
  };
  const handleSortBy = (criteria, order) => {
    setSortCriteria(criteria);
    setSortOrder(order);
  };
  useEffect(() => {
    fetchTrainData();
  }, [selectedOption, field, value]);

  useEffect(() => {
    handleTrainsort();
  }, [sortCriteria, sortOrder]);
  const handleTrainFromOpen = () => {
    SetTrainFromOpen(!trainFromOpen);
  };

  const handleTrainToOpen = () => {
    SetTrainToOpen(!TrainToOpen);
  };

  const CustomInput = ({ value, onClick }) => (
    <input
      className="w-full border-none focus:outline-none text-sm cursor-pointer p-[1px] bg-[#ffffff00] text-[#008cff]"
      type="text"
      value={moment(value).format("ddd")}
      onClick={onClick}
      readOnly
    />
  );
  const handleFlightBookNow = (id) => {
    if (jwtToken != null) {
      navigate("/bookingpagetrain");
      setTrainBookingId(id);
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginclose = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="TrainDataPage_parent_div">
      <SecondaryNav2 />
      <div className="TrainDataPage_SearchBar_parent">
        <div className="TrainDataPage_SearchBar">
          <div
            onClick={handleTrainFromOpen}
            className="TrainDataPage_SearchBar_From_div"
          >
            <h3>From</h3>
            <p>{trainJunctionFrom}</p>
          </div>
          {trainFromOpen && (
            <div style={{ position: "relative", left: "-160px", top: "-36px" }}>
              <TrainFromInput onClose={handleTrainFromOpen} />
            </div>
          )}
          <div
            onClick={handleTrainToOpen}
            className="TrainDataPage_SearchBar_To_div"
          >
            <h3>To</h3>
            <p>{trainJunctionTo}</p>
          </div>
          {TrainToOpen && (
            <div style={{ position: "relative", top: "-38px", left: "-160px" }}>
              <TrainToInput onClose={handleTrainToOpen} />
            </div>
          )}
          <div className="TrainDataPage_SearchBar_Depart_div">
            <h3>Departure</h3>
            <DatePicker
              selected={travelDay}
              onChange={(date) => setTravelDay(date)}
              customInput={<CustomInput />}
            />
          </div>
          <button
            onClick={fetchTrainData}
            style={{ position: "relative", left: "230px" }}
            className="TrainDataPage_Child_Div_Button"
          >
            SEARCH
          </button>
        </div>
      </div>
      <div className="TrainDataPage_sort_div">
        <div className="TrainDataPage_sort_child">
          <h3>Sorted By: </h3>
          <h4 onClick={() => handleSortBy("price", -1)}>
            Price{" "}
            <span style={{ color: "gray", fontSize: "14px" }}>
              (Low to High)
            </span>
          </h4>
          <h4 onClick={() => handleSortBy("price", 1)}>
            Price{" "}
            <span style={{ color: "gray", fontSize: "14px" }}>
              (High to Low)
            </span>
          </h4>
          <h4 onClick={() => handleSortBy("availableSeats", 1)}>
            Availability
          </h4>
        </div>
      </div>
      <div className="TrainDataPage_Child_div">
        <div className="TrainDataPage_left_filter_div">
          <div className="TrainDataPage_left_filter_Slider">
            <div className="flex justify-between">
              <div className="mt-[10px] flex gap-[5px] text-[12px] font-[400] text-[#333] cursor-pointer">
                <label className="flex items-center gap-[5px]">
                  <input
                    type="checkbox"
                    value="600"
                    checked={selectedOption === 600}
                    onChange={() => handleCheckboxRatingChange(600)}
                    onClick={() => handleClickSet("fare", "$lte", 600)}
                  />{" "}
                  Below - ₹ 600
                </label>
              </div>
              <p style={{ marginTop: "10px" }}></p>
            </div>
            <div className="flex justify-between">
              <div className="mt-[10px] flex gap-[5px] text-[12px] font-[400] text-[#333] cursor-pointer">
                <label className="flex items-center gap-[5px]">
                  <input
                    type="checkbox"
                    value="1200"
                    checked={selectedOption === 1200}
                    onChange={() => handleCheckboxRatingChange(1200)}
                    onClick={() => handleClickSet("fare", "$lte", 1200)}
                  />{" "}
                  ₹ 601 - ₹ 1200
                </label>
              </div>
              <p style={{ marginTop: "10px" }}></p>
            </div>
            <div className="flex justify-between">
              <div className="mt-[10px] flex gap-[5px] text-[12px] font-[400] text-[#333] cursor-pointer">
                <label className="flex items-center gap-[5px]">
                  <input
                    type="checkbox"
                    value="1201"
                    checked={selectedOption === 1201}
                    onChange={() => handleCheckboxRatingChange(1201)}
                    onClick={() => handleClickSet("fare", "$gte", 1201)}
                  />{" "}
                  ₹ 1201 - ₹ 1600
                </label>
              </div>
              <p style={{ marginTop: "10px" }}></p>
            </div>
            <div className="flex justify-between">
              <div className="mt-[10px] flex gap-[5px] text-[12px] font-[400] text-[#333] cursor-pointer">
                <label className="flex items-center gap-[5px]">
                  <input
                    type="checkbox"
                    value="1601"
                    checked={selectedOption === 1601}
                    onChange={() => handleCheckboxRatingChange(1601)}
                    onClick={() => handleClickSet("fare", "$gte", 1601)}
                  />{" "}
                  above - ₹ 1601
                </label>
              </div>
              <p style={{ marginTop: "10px" }}></p>
            </div>
          </div>
          <div className="TrainDataPage_left_filter_Coachtype">
            <p className="text-[#000] text-[12px] font-[600] ">
              Departure From {trainJunctionFrom}
            </p>
            <div className="w-[100%]">
              <div className="w-[100%] bg-[#fff] mt-[5px] rounded-[5px] flex flex-col gap-[10px]">
                <div className="w-[100%] cursor-pointer flex flex-col mt-[10px]">
                  <label className="flex text-[12px] text-[#737373] items-center gap-[5px]">
                    <input
                      type="checkbox"
                      value="24"
                      checked={selectedOption === "24"}
                      onChange={() => handleCheckboxRatingChange("24")}
                      onClick={() =>
                        handleClickSet("departureTime", "$gte", "24")
                      }
                    />{" "}
                    <span className="flex gap-[10px] items-center">
                      Early Morning <span>12am - 6am</span>
                    </span>
                  </label>
                </div>
                <div className="w-[100%] cursor-pointer flex flex-col">
                  <label className="flex text-[12px] text-[#737373] items-center gap-[5px]">
                    <input
                      type="checkbox"
                      value="11"
                      checked={selectedOption === "11"}
                      onChange={() => handleCheckboxRatingChange("11")}
                      onClick={() =>
                        handleClickSet("departureTime", "$lte", "11")
                      }
                    />{" "}
                    <span className="flex gap-[10px] items-center">
                      Morning <span>7am - 11am</span>
                    </span>
                  </label>
                </div>
                <div className="w-[100%] cursor-pointer flex flex-col">
                  <label className="flex text-[12px] text-[#737373] items-center gap-[5px]">
                    <input
                      type="checkbox"
                      value="12"
                      checked={selectedOption === "12"}
                      onChange={() => handleCheckboxRatingChange("12")}
                      onClick={() =>
                        handleClickSet("departureTime", "$gte", "12")
                      }
                    />{" "}
                    <span className="flex gap-[10px] items-center">
                      Afternoon <span>12pm - 5pm</span>
                    </span>
                  </label>
                </div>
                <div className="w-[100%] cursor-pointer flex flex-col">
                  <label className="flex text-[12px] text-[#737373] items-center gap-[5px]">
                    <input
                      type="checkbox"
                      value="17"
                      checked={selectedOption === "17"}
                      onChange={() => handleCheckboxRatingChange("17")}
                      onClick={() =>
                        handleClickSet("departureTime", "$gte", "17")
                      }
                    />{" "}
                    <span className="flex gap-[10px] items-center">
                      Night <span>6pm - 12am</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="TrainDataPage_Right_data_div">
          {availableTrains.length > 0 ? (
            availableTrains.map((trains, i) => (
              <div key={trains._id} className="TrainDataPage_Right_data">
                <div className="TrainDataPage_Right_data_details">
                  <div>
                    <h3>{trains.trainName}</h3>
                    <p style={{ color: "gray" }}>#{trains.trainNumber}</p>
                  </div>
                  <div>
                    <h4>{trains.source}</h4>
                    <p>{trains.departureTime}</p>
                  </div>
                  <img
                    src="https://flight.easemytrip.com/Content/img/arow_main.png"
                    alt="arrow"
                  />
                  <p>{trains.travelDuration}</p>
                  <img
                    src="https://flight.easemytrip.com/Content/img/arow_main.png"
                    alt="arrow"
                  />
                  <div>
                    <h4>{trains.destination}</h4>
                    <p>{trains.arrivalTime}</p>
                  </div>
                </div>
                <ul className="TrainDataPage_Right_data_details_ul">
                  {trains.coaches.map((coaches, index) => (
                    <li
                      onClick={() => handleFlightBookNow(trains._id)}
                      key={index}
                    >
                      <div className="TrainDataPage_Right_data_details_li_traintype">
                        <h3>{coaches.coachType}</h3>
                        <h3>&#8377; {trains.fare}</h3>
                      </div>
                      <p className="Train_available">
                        AVAILABLE {coaches.numberOfSeats}
                      </p>
                      <p>Free Cancellation</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No Trains Available For the Selected Day</p>
          )}
        </div>
      </div>
      {showLogin && <Login onClose={handleLoginclose} />}
    </div>
  );
}

export default TrainDataPage;
