import React, { useEffect, useState } from "react";
import "./BusDataPage.css";
import SecondaryNav2 from "../NavigationBar/SecondaryNavigation/SecondaryNav2";
import BusFromInput from "../ExtraComponents/BusFromToInput/BusFromInput";
import BusToInput from "../ExtraComponents/BusFromToInput/BusToInput";
import { useAuth } from "../context/MyContext";
import moment from "moment";
import DatePicker from "react-datepicker";
import Login from "../LoginSignUp/Login";
import { useNavigate } from "react-router";

function BusDataPage() {
  const [busData, setBusData] = useState([]);
  const [busFromOpen, setBusFromOpen] = useState(false);
  const [busToOpen, setBusToOpen] = useState(false);
  const jwtToken = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const {
    travelDay,
    setTravelDay,
    busFromInput,
    busToInput,
    selectedSeats,
    setSelectedSeats,
    setBusBookingId,
  } = useAuth();
  const departureDay = moment(travelDay).format("ddd");
  const departureDate = moment(travelDay).format("DD MMM YYYY");
  const [selectedOption, setSelectedOption] = useState(0);
  const [value, setValue] = useState("$gte");
  const [field, setField] = useState("fare");
  const handleClickSet = (type, key, data) => {
    setField(type);
    setValue(key);
    setSelectedOption(data);
  };
  const getBusData = () => {
    const dayAbbreviation = moment(travelDay).format("ddd");
    const api = `https://academics.newtonschool.co/api/v1/bookingportals/bus?&day=${dayAbbreviation}&search={"source":"${busFromInput}","destination":"${busToInput}"}&filter={"${field}":{"${value}":${selectedOption}}}`;
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
        setBusData(data.data.buses);
        console.log(data);
      });
  };
  useEffect(() => {
    getBusData();
  }, [field, value, selectedOption]);
  const handleBusFromOpen = () => {
    setBusFromOpen(!busFromOpen);
  };
  const handleBusToOpen = () => {
    setBusToOpen(!busToOpen);
  };

  const handleSelectSeat = (seatName) => {
    if (selectedSeats.includes(seatName)) {
      setSelectedSeats(selectedSeats.filter((name) => name !== seatName));
    } else {
      setSelectedSeats([...selectedSeats, seatName]);
    }
  };
  const handleRemoveSelectSeat = (seatRemove) => {
    if (selectedSeats.includes(seatRemove)) {
      setSelectedSeats(selectedSeats.filter((name) => name !== seatRemove));
    }
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

  const handleBusDetailOpen = (id) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));
  };
  const handleBusDetailClose = () => setOpen(false);
  const handleFlightBookNow = (id) => {
    if (jwtToken != null) {
      navigate("/bokkingpagebus");
      setBusBookingId(id);
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginclose = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div className="BusDataPage_Parent_Div">
      <SecondaryNav2 />
      <div className="BusDataPage_Search_Bar_Parent">
        <div className="BusDataPage_Search_Bar_Child">
          <div
            onClick={handleBusFromOpen}
            className="BusDataPage_Search_Bar_from"
          >
            <p>From</p>
            <p>{busFromInput}</p>
          </div>
          {busFromOpen && (
            <div style={{ position: "relative", left: "-210px", top: "-35px" }}>
              <BusFromInput onClose={handleBusFromOpen} />
            </div>
          )}
          <div onClick={handleBusToOpen} className="BusDataPage_Search_Bar_To">
            <p>To</p>
            <p>{busToInput}</p>
          </div>
          {busToOpen && (
            <div style={{ position: "relative", left: "-210px", top: "-35px" }}>
              <BusToInput onClose={handleBusToOpen} />
            </div>
          )}
          <div className="BusDataPage_Search_Bar_Departure">
            <p>Travel Date</p>
            <DatePicker
              selected={travelDay}
              onChange={(date) => setTravelDay(date)}
              customInput={<CustomInput />}
            />
          </div>
          <button onClick={getBusData} className="BusSearchBtn">
            Search
          </button>
        </div>
      </div>
      <div className="BusDataPage_Child_div">
        <div className="BusDataPage_Data_Left_Div">
          <div className="BusDataPage_Data_Left_Pickup">
            <h3>Pick Up time - Delhi</h3>
            <div
              className="pickuptime_daily"
              style={{ display: "flex", gap: "10px" }}
            >
              <div
                style={{
                  width: "138px",
                  height: "70px",
                  marginTop: "10px",
                  border: "1px solid #d8d8d8",
                  borderRadius: "16px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleClickSet("departureTime", "$lt", "6")}
              >
                <img
                  style={{ height: "40px" }}
                  src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/morning_inactive.png"
                />
                <p style={{ fontSize: "12px" }}>6 AM to 11 AM</p>
              </div>
              <div
                style={{
                  width: "138px",
                  height: "65px",
                  border: "1px solid #d8d8d8",
                  borderRadius: "16px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "70px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleClickSet("departureTime", "$lte", "12")}
              >
                <img
                  style={{ height: "40px" }}
                  src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/noon_inactive.png"
                />
                <p style={{ fontSize: "12px" }}>11 Am to 6pm</p>
              </div>
            </div>
            <div
              className="pickuptime_daily"
              style={{ display: "flex", gap: "10px" }}
            >
              <div
                style={{
                  width: "138px",
                  height: "65px",
                  border: "1px solid #d8d8d8",
                  borderRadius: "16px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "70px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleClickSet("departureTime", "$lte", "18")}
              >
                <img
                  style={{ height: "40px" }}
                  src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/evening_inactive.png"
                />
                <p style={{ fontSize: "12px" }}>6 Pm to 11 Pm</p>
              </div>
              <div
                style={{
                  width: "138px",
                  height: "65px",
                  border: "1px solid #d8d8d8",
                  borderRadius: "16px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "70px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleClickSet("departureTime", "$gte", "18")}
              >
                <img
                  style={{ height: "40px" }}
                  src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/night_inactive.png"
                />
                <p style={{ fontSize: "12px" }}>11 Pm to 6 Am</p>
              </div>
            </div>
          </div>
          <div className="BusDataPage_Data_Left_Pickup">
            <h3>Drop Point - Delhi</h3>
            <div
              className="pickuptime_daily"
              style={{ display: "flex", gap: "10px" }}
            >
              <div
                style={{
                  width: "138px",
                  height: "70px",
                  marginTop: "10px",
                  border: "1px solid #d8d8d8",
                  borderRadius: "16px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleClickSet("arrivalTime", "$lt", "6")}
              >
                <img
                  style={{ height: "40px" }}
                  src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/morning_inactive.png"
                />
                <p style={{ fontSize: "12px" }}>6 AM to 11 AM</p>
              </div>
              <div
                style={{
                  width: "138px",
                  height: "65px",
                  border: "1px solid #d8d8d8",
                  borderRadius: "16px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "70px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleClickSet("arrivalTime", "$lte", "12")}
              >
                <img
                  style={{ height: "40px" }}
                  src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/noon_inactive.png"
                />
                <p style={{ fontSize: "12px" }}>11 Am to 6pm</p>
              </div>
            </div>
            <div
              className="pickuptime_daily"
              style={{ display: "flex", gap: "10px" }}
            >
              <div
                style={{
                  width: "138px",
                  height: "65px",
                  border: "1px solid #d8d8d8",
                  borderRadius: "16px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "70px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleClickSet("arrivalTime", "$lte", "18")}
              >
                <img
                  style={{ height: "40px" }}
                  src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/evening_inactive.png"
                />
                <p style={{ fontSize: "12px" }}>6 Pm to 11 Pm</p>
              </div>
              <div
                style={{
                  width: "138px",
                  height: "65px",
                  border: "1px solid #d8d8d8",
                  borderRadius: "16px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "70px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleClickSet("arrivalTime", "$gte", "18")}
              >
                <img
                  style={{ height: "40px" }}
                  src="https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/night_inactive.png"
                />
                <p style={{ fontSize: "12px" }}>11 Pm to 6 Am</p>
              </div>
            </div>
          </div>
        </div>
        <div className="BusDataPage_Data_Right_Div">
          <div className="BusDataPage_Data_Right_filter">
            <h3>SORT BY:</h3>
            <ul>
              <li>Cheapest</li>
              <li>Fastest</li>
              <li>Arrival</li>
              <li>Departure</li>
            </ul>
          </div>
          {busData.map((businfo) => (
            <div className="BusDataPage_Data_Right_data" key={businfo._id}>
              <div className="BusDataPage_Data_Right_data_detail1">
                <div className="BusDataPage_Data_Right_data_detail1_nameDiv">
                  <h3 style={{ fontSize: "18px" }}>{businfo.name}</h3>
                  <p style={{ fontSize: "12px", marginTop: "5px" }}>
                    {businfo.type}
                  </p>
                </div>
                <h3 style={{ fontSize: "14px" }}>{businfo.source}</h3>
                <img
                  style={{ width: "200px", height: "8px" }}
                  src="https://flight.easemytrip.com/Content/img/arow_main.png"
                />
                <h3 style={{ fontSize: "14px" }}>{businfo.destination}</h3>
                <h4 style={{ fontSize: "20px" }}>&#8377; {businfo.fare}</h4>
              </div>
              <div className="BusDataPage_Data_Right_data_detail2">
                <h3 style={{ fontSize: "15px" }}>Ratings {businfo.ratings}</h3>
                <p style={{ fontSize: "12px" }}>{businfo.seats} Seats Left</p>
              </div>
              <div className="BusDataPage_Data_Right_data_detail3">
                <button
                  onClick={() => handleBusDetailOpen(businfo._id)}
                  className="BusDataPage_Data_Right_data_detail3_btn"
                >
                  SELECT SEATS
                </button>
              </div>
              {open[businfo._id] && (
                <div className="modalSeatSection">
                  <div className="w-[98%] h-[98%] flex justify-between  seat___section ">
                    <div
                      className="closeBtnBusSeats"
                      onClick={handleBusDetailClose}
                    ></div>
                    <div className="  w-[70%] flex flex-col items-center">
                      <div className="w-[98%] flex">
                        <div className="flex items-center ">
                          <div className="text-[18px] text-[#000] font-[600] flex items-center ">
                            {busFromOpen}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-[18px] text-[#000] font-[600] flex items-center ">
                            {busToOpen}
                          </div>
                        </div>
                      </div>
                      <div className=" w-[98%] flex justify-between ">
                        <div className="text-[12px] text-[#737373]">
                          <span>{businfo.name}</span>,{" "}
                          <span>{businfo.type}</span>
                        </div>
                        <div className="text-[12px] text-[#737373]">
                          <span>{departureDay}</span>,{" "}
                          <span>{departureDate}</span>
                        </div>
                      </div>
                      <div className="w-[98%] bg-[#eeeeee] mt-[10px] flex items-center gap-[10px] p-2">
                        <p className="text-[13px]">Seat Price</p>
                        <div className="w-[10%] h-[30px] text-[14px] font-[600] rounded-[4px] bg-[#2196f3] text-[#fff] border border-solid border-[#2196f3] flex justify-center items-center">
                          <p>{businfo.fare}</p>
                        </div>
                      </div>
                      <div className="w-[98%]">
                        <div className="bg-[#fff8c8] text-[#857400] text-[12px] font-[400] rounded-[3px] border border-solid border-[#f3e796] w-[50%] flex items-center justify-center mt-[10px]">
                          <p>
                            Select your desired seat to continue with your
                            transaction.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-around  ">
                        <div className="w-[250px] h-[450px] mt-5 flex border border-solid border-[lightgray] rounded-[10px] mb-[20px]">
                          <div className="w-[100%] gap-2 flex flex-col items-center">
                            <div
                              className={
                                selectedSeats.includes("U 1")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("U 1")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("U 3")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("U 3")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("U 5")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("U 5")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("U 7")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("U 7")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("U 9")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("U 9")}
                            ></div>
                          </div>
                          <div className="w-[100%] gap-2  flex flex-col items-center">
                            <div
                              className={
                                selectedSeats.includes("U 2")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("U 2")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("U 4")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("U 4")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("U 6")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("U 6")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("U 8")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("U 8")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("U 10")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("U 10")}
                            ></div>
                          </div>
                        </div>
                        <div className="w-[250px] mt-5 flex border border-solid border-[lightgray] rounded-[10px] mb-[20px]">
                          <div className="w-[100%] gap-2 flex flex-col items-center">
                            <div
                              className={
                                selectedSeats.includes("L 1")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("L 1")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("L 3")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("L 3")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("L 5")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("L 5")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("L 7")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("L 7")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("L 9")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("L 9")}
                            ></div>
                          </div>
                          <div className="w-[100%] gap-2 flex flex-col items-center">
                            <div
                              className={
                                selectedSeats.includes("L 2")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("L 2")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("L 4")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("L 4")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("L 6")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("L 6")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("L 8")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("L 8")}
                            ></div>
                            <div
                              className={
                                selectedSeats.includes("L 10")
                                  ? "onSelectedSeatBus"
                                  : "selectSeatBus"
                              }
                              onClick={() => handleSelectSeat("L 10")}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[400px] border border-solid border-[lightgray] rounded-[10px] flex flex-col items-center m-2 price___sectionnnnn">
                      <div className="w-[95%] text-[15px] text-[#000] mt-[50px]">
                        <p>Boarding Point</p>
                      </div>
                      <div className="w-[95%] text-[14px] text-[#404040] flex gap-[5px] mt-[5px]">
                        <span>{businfo.departureTime}</span> :{" "}
                        <span>{businfo.source}</span>
                      </div>
                      <div className="w-[95%] text-[15px] text-[#000] mt-[15px]">
                        <p>Dropping Point</p>
                      </div>
                      <div className="w-[95%] text-[14px] text-[#404040] flex gap-[5px] mt-[5px]">
                        <span>{businfo.arrivalTime}</span> :{" "}
                        <span>{businfo.destination}</span>
                      </div>
                      <div className="w-[95%] text-[15px] text-[#000] mt-[15px]">
                        <div className="bg-[#fff] w-[100%] border border-solid border-[#dedede] flex flex-col items-center mt-[40px]">
                          <div className="text-[12px] text-[#000] flex justify-between w-[97%] mt-[10px]">
                            <p>Base Fare(+)</p>{" "}
                            <span>
                              <i>₹</i> {businfo.fare}
                            </span>
                          </div>
                          <div className="text-[12px] text-[#000] flex justify-between w-[97%] mt-[10px]">
                            <p>Selected No. Seats</p>{" "}
                            <span>{selectedSeats.length} Seats</span>
                          </div>
                          <div className="text-[12px] text-[#000] flex justify-between mt-[15px] w-[97%]">
                            <p>Total Amount</p>
                            <p className="text-[20px] font-[600]">
                              <i>₹</i> {businfo.fare * selectedSeats.length}
                            </p>
                          </div>
                          <div className="text-[12px] text-[#000] flex justify-between w-[97%] mb-[10px]">
                            <p className="w-[100%] text-[10px] text-[#737373] flex justify-end">
                              (Including All Taxes)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] text-[15px] text-[#000] mt-[15px]">
                        <p>Select Seats</p>
                      </div>
                      <div className="w-[95%] text-[15px] text-[#000] mt-[5px] flex flex-wrap gap-[10px]">
                        {selectedSeats?.map((seat, indexseat) => (
                          <p
                            key={indexseat}
                            className="w-[22%] h-[4vh] text-[13px] text-[#000] bg-[#fcf8e3] border border-solid border-[#dcd9c9] rounded-[4px] font-[600] flex justify-center items-center"
                          >
                            {seat}
                            <span
                              className=" absolute text-[17px] text-[#fff] bg-[#3a3a3a] w-[17px] h-[17px] flex items-center justify-center rounded-[50%] cursor-pointer ml-[3.8em] mt-[-1.3em]"
                              onClick={() => handleRemoveSelectSeat(seat)}
                            >
                              ×
                            </span>
                          </p>
                        ))}
                      </div>
                      <div
                        onClick={() => handleFlightBookNow(businfo._id)}
                        className="w-[95%] h-[42px] bg-[#4273e5] text-[16px] text-[#fff] mt-[15px] flex justify-center items-center mb-[20px] cursor-pointer rounded-[10px]"
                      >
                        <p className="flex justify-center items-center">
                          Continue
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {showLogin && <Login onClose={handleLoginclose} />}
    </div>
  );
}

export default BusDataPage;
