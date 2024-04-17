import React, { useEffect, useState } from "react";
import "./BookingPageHotel.css";
import SecondaryNav2 from "../NavigationBar/SecondaryNavigation/SecondaryNav2";
import { useAuth } from "../context/MyContext";
import { useNavigate } from "react-router";

function BookingPageHotel() {
  const { HotelBookinId, setFare, setBookingType, setBookingId } = useAuth();
  const [HotelBookingData, setHotelBookingDetailData] = useState({});
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
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${HotelBookinId}`,
        {
          method: "GET",
          headers: {
            projectID,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setHotelBookingDetailData(data?.data);
      }
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    }
  };

  useEffect(() => {
    fetchSingleFlightData();
  }, []);

  const handlepaymentPage = () => {
    if (validateForm()) {
      navigate("/paymentpagehotel");
      setFare(Math.floor(HotelBookingData.avgCostPerNight));
      setBookingId(HotelBookingData._id);
      setBookingType("hotel");
    }
  };

  const isContinueButtonDisabled = () => {
    return (
      mobileNo === "" ||
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      age === ""
    );
  };

  return (
    <div className="BookingPageHotel_parent">
      <SecondaryNav2 />
      <div className="BookingPageHotel_Child">
        <div className="booking__page__hotel" style={{ marginTop: "20px" }}>
          <h3 style={{ color: "white" }}>Complete Your Booking</h3>
        </div>
        <div className="BookingPageHotel_Child_data">
          <div className="BookingPageHotel_Child_data_left">
            <div className="BookingPageHotel_Child_data_left_data1">
              <div className="BookingPageHotel_Child_data_left_data_from_to_div">
                <div className="BookingPageHotel_Child_data_left_data_from_to">
                  <h3>{HotelBookingData.location}</h3>
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
              <p style={{ fontSize: "16px" }}>{HotelBookingData.name}</p>
              <div
                style={{
                  backgroundColor: "#f4f4f4",
                  width: "100%",
                  height: "100px",
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
                  Amenities
                </h3>
                <h3
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    marginTop: "20px",
                  }}
                >
                  <span style={{ marginLeft: "10px" }}>
                    {HotelBookingData?.amenities?.[0]}{" "}
                  </span>
                  <span style={{ marginLeft: "10px" }}>
                    {HotelBookingData?.amenities?.[1]}
                  </span>
                  <span style={{ marginLeft: "10px" }}>
                    {HotelBookingData?.amenities?.[2]}
                  </span>
                </h3>
              </div>
            </div>
            <div className="BookingPageHotel_Child_data_left_data2">
              <h3>Add Contact Details</h3>
              <div className="BookingPageHotel_Child_data_left_data2_contactDetail">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>Mobile No</label>
                  <input
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
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
            </div>
            <div className="BookingPageHotel_Child_data_left_data3">
              <h3>Add Traveller Details</h3>
              <div className="BookingPageHotel_Child_data_left_data2_traveller_Detail">
                <div
                  className="lasttt__name"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "70px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && (
                      <p className="error">{errors.firstName}</p>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Last Name</label>
                    <input
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
                      style={{ width: "80px" }}
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
          <div className="BookingPageHotel_Child_data_right">
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
                <p>Rs {Math.floor(HotelBookingData.avgCostPerNight)}</p>
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
                <h3>
                  Rs {Math.floor(HotelBookingData.avgCostPerNight) + taxes}
                </h3>
              </div>
            </div>
            <button
              onClick={handlepaymentPage}
              className="HotelBooingpageBtn"
              disabled={isContinueButtonDisabled()}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPageHotel;
