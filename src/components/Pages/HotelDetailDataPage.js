import React, { useEffect } from "react";
import "./HotelDetailDataPage.css";
import { useState } from "react";
import SecondaryNav2 from "../NavigationBar/SecondaryNavigation/SecondaryNav2";
import { useAuth } from "../context/MyContext";
import DatePicker from "react-datepicker";
import HotelInput from "../ExtraComponents/HotelCityInput/HotelCityInput";
import { useNavigate } from "react-router";
import moment from "moment";
import HotelGuestsAndRoom from "../ExtraComponents/HotelGuestAndRoom/HotelGuestsAndRoom";
import Login from "../LoginSignUp/Login";

function HotelDetailDataPage() {
  const [flightToOpen, setFlightToOpen] = useState(false);
  const [isHotelGuestOpen, setIsHotelGuestOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [hotelData, setHotelData] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const {
    hotelRoomNo,
    hotelAdultNo,
    hotelCity,
    hotelDetaiId,
    setHotelCheckin,
    setHotelCheckOut,
    hotelCheckin,
    hotelCheckOut,
    setHotelBookingId,
    HotelBookinId,
  } = useAuth();

  const handleGetHotelData2 = () => {
    const dayAbbreviation = moment(hotelCheckin).format("ddd");
    const api = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${hotelCity}"}&day=${dayAbbreviation}`;
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

  const handleHotelDataFromId = async () => {
    const api = `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${hotelDetaiId}`;
    const projectId = "wan6hnsnhwfn";
    await fetch(api, {
      headers: {
        projectID: projectId,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setHotelData(data.data);
        console.log(data.data);
      });
  };

  const handleFlightCityInput = () => {
    setFlightToOpen(!flightToOpen);
  };
  const handleOpenHotelGuests = () => {
    setIsHotelGuestOpen(!isHotelGuestOpen);
  };
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

  useEffect(() => {
    handleHotelDataFromId();
  }, []);

  const handleFlightBookNow = (id) => {
    if (jwtToken != null) {
      navigate("/bookingpagehotel");
      setHotelBookingId(id);
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginclose = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div className="HotelDetailDataPage_parent_div">
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
          {flightToOpen && (
            <div style={{ position: "relative", left: "-160px", top: "-40px" }}>
              <HotelInput onClose={handleFlightCityInput} />
            </div>
          )}
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
          <div className="HotelDataPage_SearchBar_Rooms_div_Input">
            {isHotelGuestOpen && (
              <div
                style={{ position: "relative", top: "-105px", left: "-200px" }}
              >
                <HotelGuestsAndRoom onClose={handleOpenHotelGuests} />
              </div>
            )}
          </div>
          <button
            onClick={handleGetHotelData2}
            className="HotelDataPage_Child_Div_Button"
          >
            SEARCH
          </button>
        </div>
      </div>
      <div className="HotelDataPage_search_div_Child">
        <div className="HotelDataPage_search_div_Child_data_parent">
          <div className="HotelDataPage_search_div_Child_data_child1">
            <img
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              src={hotelData?.images?.[0]}
              alt="Hotel Image"
            />
          </div>
          <div className="HotelDataPage_search_div_Child_data_child2">
            <div className="HotelDataPage_search_div_Child_data_child2_data1">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                src={hotelData?.images?.[1]}
                alt="Hotel Image"
              />
            </div>
            <div className="HotelDataPage_search_div_Child_data_child2_data2">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                src={hotelData?.images?.[2]}
                alt="Hotel Image"
              />
            </div>
          </div>
          <div className="HotelDataPage_search_div_Child_data_child3">
            <div className="HotelDataPage_search_div_Child_data_child3_data1">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    width: "160px",
                  }}
                >
                  <h3 style={{ fontSize: "18px" }}>
                    {hotelData?.rooms?.[0].roomType}
                  </h3>
                  <p style={{ fontSize: "14px" }}>
                    {hotelData?.rooms?.[0].bedDetail}
                  </p>
                  <p style={{ fontSize: "11px" }}>
                    {hotelData?.rooms?.[0].cancellationPolicy}
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <p style={{ fontSize: "15px", textAlign: "right" }}>
                    Per Night
                  </p>
                  <h4 style={{ fontSize: "18px", textAlign: "right" }}>
                    &#8377; {hotelData?.rooms?.[0].costDetails.baseCost}
                  </h4>
                  <p style={{ fontSize: "11px", textAlign: "right" }}>
                    + &#8377; {hotelData?.rooms?.[0].costDetails.taxesAndFees}{" "}
                    taxes & fees
                  </p>
                </div>
              </div>
              <div
                style={{
                  borderTop: "1px solid lightgray",
                  marginTop: "4px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={() => handleFlightBookNow(hotelData._id)}
                  className="hoteldetaildatabtn"
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="HotelDataPage_search_div_Child_data_child3_data2">
              <h3 className="rating__hotel_" style={{ fontSize: "25px" }}>
                Rating
              </h3>
              <h3 style={{ fontSize: "20px" }}>{hotelData?.rating}</h3>
              <p>Based on {Math.floor(Math.random() * 7000) + 1} Ratings</p>
            </div>
          </div>
        </div>
        <h1 style={{ marginLeft: "10px" }}>{hotelData?.name}</h1>
        <p style={{ marginLeft: "10px" }}>{hotelData?.location}</p>
      </div>
      <div className="hotelDetailRoomsSection">
        <div className="w-[100%] h-[6vh] flex bg-[#efececd4] text-[13px] font-medium headerrrrr__hotel">
          <div className="h-[100%] w-[25%] flex items-center">
            <p className="ml-[40px]">Room Type</p>
          </div>
          <div className="h-[100%] w-[30%] flex items-center">
            <p className="ml-[220px]">Benefits</p>
          </div>
          <div className="h-[100%] w-[45%] flex items-center justify-center">
            <p className="ml-[140px]">Per Night Price</p>
          </div>
        </div>
        <div className="w-[100%]  h-[100%] flex flex-col">
          {hotelData.rooms?.map((room, index) => (
            <div
              className=" border border-solid border-[lightgray] rounded-[10px] mt-2 w-[100%] h-[40vh] flex rooms____"
              key={index}
            >
              <div className="border border-solid border-[lightgray] rounded-l-[10px] h-[100%] w-[700px] flex justify-center items-center">
                <div className="w-[95%] h-[95%] flex flex-col gap-[10px]">
                  <div className="w-[100%] h-[15%] flex items-center">
                    <p className="text-[15px] font-[600] text-[#000]">
                      {room?.roomType} Room
                    </p>
                  </div>
                  <div className="w-[100%] h-[70%] rounded-[5px]">
                    <img
                      className="w-[100%] h-[100%] object-cover rounded-[5px]"
                      src={hotelData?.images?.[2]}
                    />
                  </div>
                  <div className=" w-[100%] h-[15%] flex gap-[8px]">
                    <div className=" w-[35%] h-[100%] bg-[#D5E5FA] rounded-[5px] text-[13px] flex justify-center items-center">
                      <p>{room?.bedDetail}</p>
                    </div>
                    <div className=" w-[30%] h-[100%] bg-[#D5E5FA] rounded-[5px] text-[13px] flex justify-center items-center">
                      <p>{room?.roomSize} sq.ft</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-solid border-[lightgray] h-[100%] w-[700px] flex justify-center items-center middddddddd">
                <div className="w-[95%] h-[95%]">
                  <div className="w-[100%] h-[15%] flex items-center gap-[5px]">
                    <p className="h-[18px] w-[4px] rounded-[3px] bg-[#0c6be9] "></p>
                    <p className="text-[14px] font-[600] text-[#000]">
                      Room Only
                    </p>
                  </div>
                  <div className="w-[100%] h-[50%]">
                    <div className="ml-[10px] h-[30%] text-[#000] text-[13px] flex gap-[5px] items-center">
                      <img
                        className="w-[13px] h-[13px]"
                        src="https://flight.easemytrip.com/Content/img/tick1.svg"
                      />
                      <p>{room?.cancellationPolicy}</p>
                    </div>
                    <div className="ml-[10px] h-[30%] text-[#000] text-[13px] flex gap-[5px] items-center">
                      <img
                        className="w-[13px] h-[13px]"
                        src="https://flight.easemytrip.com/Content/img/tick1.svg"
                      />
                      <p>Breakfast included</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-solid border-[lightgray] rounded-r-[10px] h-[100%] w-[400px]">
                <div className="h-[95%] w-[100%] flex">
                  <div className="w-[100%] h-[60%] pr-[30px] mt-[30px]">
                    <div className="mt-[10px] flex items-center justify-end gap-[1px] w-[100%] h-[5vh] text-[24px] font-[600] ">
                      <p className="mr-[2px]"> &#8377; {room?.costPerNight}</p>
                    </div>
                    <div className="flex items-center justify-end text-[12px] font-[600] text-[#000] w-[100%] h-[20%] ">
                      <p>+ </p>
                      <img
                        className="resIconHotel"
                        src="https://hotels.easemytrip.com/newhotel/Content/img/rupee_new_black.svg"
                      />
                      <p className="mr-[2px]">
                        {room?.costDetails.taxesAndFees} Taxes & fees
                      </p>
                    </div>
                    <p className="text-[11px] text-[#737373] font-[600] mr-[2px] flex  justify-end ">
                      (Per Night)
                    </p>
                    <button
                      onClick={() => handleFlightBookNow(hotelData._id)}
                      className="hoteldetaildatabtn2"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showLogin && <Login onClose={handleLoginclose} />}
    </div>
  );
}

export default HotelDetailDataPage;
