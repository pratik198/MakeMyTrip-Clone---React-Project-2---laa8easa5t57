import React, { useEffect, useState } from "react";
import "./BookingPageBus.css";
import SecondaryNav2 from "../NavigationBar/SecondaryNavigation/SecondaryNav2";
import { useAuth } from "../context/MyContext";
import { useNavigate } from "react-router";

function BookingPageBus() {
  const {
    BusBookingId,
    busFromInput,
    busToInput,
    setFare,
    setBookingType,
    setBookingId,
  } = useAuth();
  const [BusBookingData, setBusBookingDetailData] = useState([]);
  const navigate = useNavigate();
  const taxes = Math.floor(Math.random() * 1000) + 1;

  // State for input values
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!/^[6-9]\d{9}$/.test(mobileNo)) {
      errors.mobileNo = "Mobile No is invalid";
      valid = false;
    }

    if (email === "") {
      errors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (firstName === "") {
      errors.firstName = "First Name is required";
      valid = false;
    }

    if (lastName === "") {
      errors.lastName = "Last Name is required";
      valid = false;
    }

    if (age === "") {
      errors.age = "Age is required";
      valid = false;
    } else if (isNaN(age) || age <= 0) {
      errors.age = "Age must be a positive number";
      valid = false;
    }

    setErrors(errors);

    return valid;
  };
  const fetchSingleFlightData = async () => {
    try {
      const projectID = "laa8easa5t57";
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/bookingportals/bus/${BusBookingId}`,
        {
          method: "GET",
          headers: {
            projectID,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setBusBookingDetailData(data?.data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching bus data:", error);
    }
  };

  useEffect(() => {
    fetchSingleFlightData();
  }, []);

  const handlePaymentPage = (busfare, bookingType, busId) => {
    const isValid = validateForm();

    if (isValid) {
      navigate("/paymentpageBus");
      setFare(busfare);
      setBookingId(busId);
      setBookingType(bookingType);
    } else {
      // alert("Please fill in all the required fields.");
    }
  };

  // const handlePaymentPage = (busfare, bookingType, busId) => {
  //   navigate("/paymentpageBus");
  //   setFare(busfare);
  //   setBookingId(busId);
  //   setBookingType(bookingType);
  // };

  const isContinueButtonDisabled = () => {
    // Check if any of the required input fields are empty
    return (
      mobileNo === "" ||
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      age === ""
    );
  };

  return (
    <div className="BookingPageBus_parent">
      <SecondaryNav2 />
      <div className="BookingPageBus_Child">
        <div
          className="bus____complete"
          // style={{ width: "1200px", marginTop: "20px" }}
        >
          <h3 className="complete__booking_ssection" style={{ color: "white" }}>
            Complete Your Booking
          </h3>
        </div>
        <div className="BookingPageBus_Child_data">
          <div className="BookingPageBus_Child_data_left">
            <div className="BookingPageBus_Child_data_left_data1">
              <div className="BookingPageBus_Child_data_left_data_from_to_div">
                <div className="BookingPageBus_Child_data_left_data_from_to">
                  <h3>{BusBookingData.destination}</h3>
                </div>
                <div
                  style={{
                    color: "white",
                    backgroundImage: "linear-gradient(93deg, #53b2fe, #065af3)",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                    CANCELLATION FEES APPLY
                  </p>
                </div>
              </div>
              <p style={{ fontSize: "16px" }}>{BusBookingData.name}</p>
              <div
                style={{
                  backgroundColor: "#f4f4f4",
                  width: "100%",
                  height: "150px",
                  marginTop: "10px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  {BusBookingData.departureTime}
                  <div
                    style={{
                      border: "1px solid gray",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  ></div>
                  {busFromInput}
                </h3>
                <p
                  style={{
                    marginLeft: "50px",
                    borderLeft: "1px dotted gray",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "20px",
                  }}
                >
                  {BusBookingData.travelDuration}
                </p>
                <h3
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  {BusBookingData.arrivalTime}{" "}
                  <div
                    style={{
                      border: "1px solid gray",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  ></div>{" "}
                  {busToInput}
                </h3>
              </div>
            </div>
            <div className="BookingPageBus_Child_data_left_data2">
              <h3>Add Contact Details</h3>
              <div className="BookingPageBus_Child_data_left_data2_contactDetail">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>Mobile No</label>
                  <input
                    style={{
                      padding: "5px",
                    }}
                    type="number"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                  />
                  {errors.mobileNo && (
                    <p className="error">{errors.mobileNo}</p>
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>Email Address</label>
                  <input
                    style={{
                      padding: "5px",
                    }}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
            </div>
            <div className="BookingPageBus_Child_data_left_data3">
              <h3>Add Traveller Details</h3>
              <div className="BookingPageBus_Child_data_left_data2_traveller_Detail">
                <div
                  className="bussssss__pageeee"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "70px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>First Name</label>
                    <input
                      style={{
                        padding: "5px",
                      }}
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && (
                      <p className="error">{errors.firstName}</p>
                    )}
                  </div>
                  <div
                    className="right_side_ssectionnnn"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <label>Last Name</label>
                    <input
                      style={{
                        padding: "5px",
                      }}
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && (
                      <p className="error">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "30px", marginTop: "20px" }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label style={{ marginTop: "10px" }}>Age</label>
                    <input
                      style={{ width: "80px", padding: "5px" }}
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    {errors.age && <p className="error">{errors.age}</p>}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label style={{ marginTop: "10px" }}>Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="BookingPageBus_Child_data_right">
            <div>
              <h3>Fare Summary</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  paddingTop: "15px",
                }}
              >
                <h4>Base Fare</h4>
                <p>Rs {BusBookingData.fare}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "30px",
                  borderTop: "1px solid lightgray",
                  paddingTop: "15px",
                }}
              >
                <h4>Taxes and Surcharges</h4>
                <p>Rs {taxes}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "30px",
                  borderTop: "1px solid gray",
                  paddingTop: "10px",
                }}
              >
                <h2>Total Amount</h2>
                <h3>Rs {BusBookingData.fare + taxes}</h3>
              </div>
            </div>
            <button
              onClick={() =>
                handlePaymentPage(
                  BusBookingData.fare,
                  "bus",
                  BusBookingData._id
                )
              }
              className="HotelBooingpageBtn"
              // disabled={isContinueButtonDisabled()}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPageBus;
