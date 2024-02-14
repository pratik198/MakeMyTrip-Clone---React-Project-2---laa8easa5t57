import React, { useEffect, useState } from "react";
import { useAuth } from "../context/MyContext";
import "./HotelDataPage.css";
import SecondaryNav2 from "../NavigationBar/SecondaryNavigation/SecondaryNav2";
import HotelInput from "../ExtraComponents/HotelCityInput/HotelCityInput";
import HotelGuestsAndRoom from "../ExtraComponents/HotelGuestAndRoom/HotelGuestsAndRoom";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useNavigate } from "react-router";

function HotelDataPage() {
  const navigate = useNavigate();
  const [hotelData, setHotelData] = useState([]);
  const {
    hotelCity,
    hotelRoomNo,
    hotelAdultNo,
    hotelCheckOut,
    setHotelCheckOut,
    hotelCheckin,
    setHotelCheckin,
    setHotelDetailId,
  } = useAuth();
  const [flightToOpen, setFlightToOpen] = useState(false);
  const [isHotelGuestOpen, setIsHotelGuestOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("rating");
  const [sortOrder, setSortOrder] = useState(-1);
  const [selectedOption, setSelectedOption] = useState(0);
  const [value, setValue] = useState("$gte");
  const [field, setField] = useState("rating");

  const handleFlightCityInput = () => {
    setFlightToOpen(!flightToOpen);
  };

  const handleClickSet = (type, key, data) => {
    setField(type);
    setValue(key === value ? "$gte" : key);
    setSelectedOption(data);
  };

  const handleCheckboxRatingChange = (value) => {
    setSelectedOption(value === selectedOption ? 0 : value);
  };
  const handleOpenHotelGuests = () => {
    setIsHotelGuestOpen(!isHotelGuestOpen);
  };

  const handleGetHotelData = () => {
    const api = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${hotelCity}"}&sort={"${sortCriteria}":${sortOrder}}`;
    const projectId = "laa8easa5t57";

    fetch(api, {
      headers: {
        projectID: projectId,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setHotelData(data.data.hotels);
      });
  };

  const handleGetHotelData2 = () => {
    const dayAbbreviation = moment(hotelCheckin).format("ddd");
    const api = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${hotelCity}"}&day="${dayAbbreviation}"&filter={"${field}":{"${value}":${selectedOption}}}`;
    const projectId = "wan6hnsnhwfn";

    fetch(api, {
      headers: {
        projectID: projectId,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setHotelData(data.data.hotels);
      });
  };

  useEffect(() => {
    handleGetHotelData2();
  }, [selectedOption, field, value]);

  const handleSortBy = (criteria, order) => {
    setSortCriteria(criteria);
    setSortOrder(order);
    handleGetHotelData();
  };

  useEffect(() => {
    handleGetHotelData();
  }, [sortCriteria, sortOrder]);

  const HotelCheckIn = ({ value, onClick }) => (
    <input
      className="w-full border-none focus:outline-none text-sm cursor-pointer p-[1px] bg-[#ffffff00] text-[#008cff] z-10"
      type="text"
      value={moment(value).format("ddd")}
      onClick={onClick}
      readOnly
    />
  );

  const HotelCheckOut = ({ value, onClick }) => (
    <input
      className="w-full border-none focus:outline-none text-sm cursor-pointer p-[1px] bg-[#ffffff00] text-[#008cff] z-10"
      type="text"
      value={moment(value).format("ddd")}
      onClick={onClick}
      readOnly
    />
  );

  function handleSetHotelId(id) {
    setHotelDetailId(id);
    navigate("/hoteldetaildatapage");
  }

  return (
    <div className="HotelDataPage_parent_section">
      <div className="HotelDataPage_Child_section">
        <SecondaryNav2 />
        <div className="HotelDataPage_search_div_Parent">
          <div className="HotelDataPage_search_div">
            <div
              onClick={handleFlightCityInput}
              className="HotelDataPage_SearchBar_City_div"
            >
              <span>CITY, AREA OR PROPERTY</span>
              <span>{hotelCity}</span>
            </div>

            <div className="HotelDataPage_SearchBar_CheckIn_div">
              <span>CHECK-IN</span>
              <span>
                <DatePicker
                  selected={hotelCheckin}
                  onChange={(date) => setHotelCheckin(date)}
                  customInput={<HotelCheckIn />}
                />
              </span>
            </div>

            <div className="HotelDataPage_SearchBar_CheckOut_div">
              <span>CHECK-OUT</span>
              <span>
                <DatePicker
                  selected={hotelCheckOut}
                  onChange={(date) => setHotelCheckOut(date)}
                  customInput={<HotelCheckOut />}
                />
              </span>
            </div>
            <div
              onClick={handleOpenHotelGuests}
              className="HotelDataPage_SearchBar_Rooms_div"
            >
              <span>ROOMS & GUESTS</span>
              <span style={{ fontWeight: "bolder", fontSize: "10px" }}>
                {hotelRoomNo} Rooms {hotelAdultNo} Adults
              </span>
            </div>
            <button
              onClick={handleGetHotelData2}
              className="HotelDataPage_Child_Div_Button"
            >
              SEARCH
            </button>
          </div>
        </div>
        <div className="HotelDataPage_sort_by_Parent_div">
          <div className="HotelDataPage_sort_by_div">
            <span>SORT BY:</span>
            <h3 onClick={() => handleSortBy("rating", -1)}>
              User Rating <span>(Highest First)</span>
            </h3>
            <h3 onClick={() => handleSortBy("rating", 1)}>
              User Rating <span>(Lowest First)</span>
            </h3>
            <h3 onClick={() => handleSortBy("price", -1)}>
              Price <span>(Highest First)</span>
            </h3>
            <h3 onClick={() => handleSortBy("price", 1)}>
              Price <span>(Lowest First)</span>
            </h3>
          </div>
        </div>
        <div className="HotelDataPage_search_HotelInput_div">
          {flightToOpen && <HotelInput onClose={handleFlightCityInput} />}
        </div>
        <div className="HotelDataPage_SearchBar_Rooms_div_Input">
          {isHotelGuestOpen && (
            <HotelGuestsAndRoom onClose={handleOpenHotelGuests} />
          )}
        </div>
        <div className="HotelDataPage_filterAndData_div">
          <div className="HotelDataPage_filter_div">
            <div className="HotelDataPage_filter_pricepernight">
              <h3>Price per night</h3>
              <div>
                <input
                  type="checkbox"
                  value="2000"
                  checked={selectedOption === 2000}
                  onChange={() => handleCheckboxRatingChange(2000)}
                  onClick={() =>
                    handleClickSet("avgCostPerNight", "$lte", 2000)
                  }
                />
                <label>Below - &#8377;2000</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="3000"
                  checked={selectedOption === 3000}
                  onChange={() => handleCheckboxRatingChange(3000)}
                  onClick={() =>
                    handleClickSet("avgCostPerNight", "$lte", 3000)
                  }
                />
                <label>&#8377;2000 - &#8377;3000</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="5000"
                  checked={selectedOption === 5000}
                  onChange={() => handleCheckboxRatingChange(5000)}
                  onClick={() =>
                    handleClickSet("avgCostPerNight", "$lte", 5000)
                  }
                />
                <label>&#8377;3000 - &#8377;5000</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="5001"
                  checked={selectedOption === 5001}
                  onChange={() => handleCheckboxRatingChange(5001)}
                  onClick={() =>
                    handleClickSet("avgCostPerNight", "$gte", 5001)
                  }
                />
                <label>&#8377;5000 - &#8377;8000</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="8000"
                  checked={selectedOption === 8000}
                  onChange={() => handleCheckboxRatingChange(8000)}
                  onClick={() =>
                    handleClickSet("avgCostPerNight", "$gte", 8000)
                  }
                />
                <label>above - &#8377;8000</label>
              </div>
            </div>
            <div className="HotelDataPage_filter_userrating">
              <h3>User Rating</h3>
              <div>
                <input
                  type="checkbox"
                  value="5"
                  checked={selectedOption === 5}
                  onChange={() => handleCheckboxRatingChange(5)}
                  onClick={() => handleClickSet("rating", "$eq", 5)}
                />
                <label>Excellent: 4+</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="4.5"
                  checked={selectedOption === 4.5}
                  onChange={() => handleCheckboxRatingChange(4.5)}
                  onClick={() => handleClickSet("rating", "$eq", 4.5)}
                />
                <label>Very Good: 3.5+</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="4"
                  checked={selectedOption === 4}
                  onChange={() => handleCheckboxRatingChange(4)}
                  onClick={() => handleClickSet("rating", "$eq", 4)}
                />
                <label>Good: 3+</label>
              </div>
            </div>
          </div>
          <div className="HotelDataPage_data_component_div">
            <h1>Showing Properties in {hotelCity}</h1>
            {hotelData.map((data, index) => (
              <div
                onClick={() => handleSetHotelId(data._id)}
                className="HotelDataPage_data_component"
                key={index}
              >
                <div className="HotelDataPage_data_component_left">
                  <div className="HotelDataPage_data_component_left_image">
                    <div className="HotelDataPage_data_component_left_imageimg1">
                      <img src={data.images[0]} alt={`Hotel ${data.name}`} />
                    </div>
                    <div className="HotelDataPage_data_component_left_image_Thumbnail">
                      {data.images.slice(1, 5).map((thumbnail, idx) => (
                        <div
                          key={idx}
                          className={`HotelDataPage_data_component_left_imageimg${
                            idx + 2
                          }`}
                        >
                          <img
                            className="thumbnailImgHotelData"
                            src={thumbnail}
                            alt={`Thumbnail ${idx + 2}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="HotelDataPage_data_component_left_Data">
                    <h3>{data.name}</h3>
                    <span>{data.location}</span>
                  </div>
                </div>
                <div className="HotelDataPage_data_component_Right">
                  <h3>
                    Ratings <span>{data.rating}</span>
                  </h3>
                  <h4> &#8377;{` ${Math.floor(data.avgCostPerNight)}`}</h4>
                  <span>
                    {" "}
                    + &#8377;
                    {` ${data.rooms[0].costDetails.taxesAndFees} taxes & fees`}{" "}
                    <br></br> per night
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDataPage;
