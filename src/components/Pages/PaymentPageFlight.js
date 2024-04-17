import React, { useState } from "react";
import "./PaymentPage.css";
import upiQr from "../../Assets/upiqr.jpg";
import { useAuth } from "../context/MyContext";
import PaymentSuccessfull from "../ExtraComponents/PaymentSuccesfullModal/PaymentSuccessfull";

function PaymentPageFlight() {
  const [selectedOption, setSelectedOption] = useState("UPI");
  const { fare, bookingId, bookingType } = useAuth();
  const [showSuccessfull, setShowSuccessfull] = useState(false);
  const token = localStorage.getItem("jwtToken");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowSuccessfull(false);
    setError("");
  };

  const fetchPaymentData = () => {
    if (selectedOption === "UPI") {
      if (upiId.trim() === "") {
        setError("Please enter UPI ID");
        return;
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(upiId)) {
        setError("Please enter a valid email address for UPI ID");
        return;
      }
    } else if (selectedOption === "DebitCreditCard") {
      if (cardNumber.trim() === "") {
        setError("Please enter Card Number");
        return;
      }
      if (cardName.trim() === "") {
        setError("Please enter Name on Card");
        return;
      }
      if (expiryMonth.trim() === "" || expiryYear.trim() === "") {
        setError("Please enter Expiry Month and Year");
        return;
      }
      if (cvv.trim() === "") {
        setError("Please enter CVV");
        return;
      }
    }

    const api =
      "https://academics.newtonschool.co/api/v1/bookingportals/booking";
    const projectid = "laa8easa5t57";

    fetch(api, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: projectid,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookingType: bookingType,
        bookingDetails: {
          flightId: bookingId,
          startDate: "2023-10-09T10:03:53.554+00:00",
          endDate: "2023-10-09T10:03:53.554+00:00",
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          setShowSuccessfull(true);
        }
      })
      .catch((error) => {
        setError("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="PaymentPage_parent_div">
      <div className="PaymentPage_Child_div">
        <div className="PaymentPage_Child_div_left">
          <div className="PaymentPage_Child_div_left_data">
            <div
              style={{
                height: "50px",
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <h3>Payment Options</h3>
            </div>
            <div
              style={{
                borderTop: "2px solid lightgray",
                height: "100px",
                padding: "10px",
                display: "flex",
                cursor: "pointer",
                backgroundColor:
                  selectedOption === "UPI" ? "white" : "transparent",
              }}
              onClick={() => handleOptionClick("UPI")}
            >
              <img
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
                src="https://starlinebattery.com/wp-content/uploads/2022/08/UPI_logo_PNG-300x300-1.jpg"
              />
              <div>
                <h3 style={{ color: "#008cff" }}>UPI Options</h3>
                <p style={{ color: "gray", fontSize: "14px" }}>
                  Pay Directly From Your Bank <br></br> Account
                </p>
                <p style={{ color: "green", fontSize: "11px" }}>
                  Flat additional discount of Rs 25
                </p>
              </div>
            </div>
            <div
              style={{
                borderTop: "2px solid lightgray",
                borderBottom: "2px solid lightgray",
                height: "80px",
                padding: "10px",
                cursor: "pointer",
                display: "flex",
                backgroundColor:
                  selectedOption !== "UPI" ? "white" : "transparent",
              }}
              onClick={() => handleOptionClick("DebitCreditCard")}
            >
              <img
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
                src="https://banner2.cleanpng.com/20180630/iyq/kisspng-credit-card-debit-card-clip-art-5b37907f1a4f07.4745129515303681271078.jpg"
              />
              <div>
                <h4>Credit/Cebit/ATM Card</h4>
                <p style={{ fontSize: "11px", color: "gray" }}>
                  Visa,MasterCard,Amex,Rupay And <br></br> More
                </p>
              </div>
            </div>
          </div>
          {selectedOption === "UPI" && (
            <div className="PaymentPage_Child_div_right_data">
              <div
                style={{
                  height: "160px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <h4>Enter Upi Id</h4>
                <input
                  style={{ width: "200px", fontSize: "20px", padding: "10px" }}
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
                <button
                  onClick={fetchPaymentData}
                  className="PaymentPagePaybtn"
                >
                  Pay Now
                </button>
                {error && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                      position: "absolute",
                      top: "21em",
                    }}
                  >
                    {error}
                  </p>
                )}
              </div>
              <p style={{ textAlign: "center" }}>or</p>
              <div>
                <h4 style={{ textAlign: "center", marginTop: "20px" }}>
                  Scan the Qr Code
                </h4>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <img
                    style={{ width: "200px", marginLeft: "10px" }}
                    src={upiQr}
                  />
                </div>
              </div>
              <img />
            </div>
          )}
          {selectedOption === "DebitCreditCard" && (
            <div style={{ padding: "50px 20px 20px 20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "480px",
                }}
              >
                <label>Card Number</label>
                <input
                  style={{
                    marginTop: "10px",
                    padding: "10px",
                    fontSize: "18px",
                  }}
                  type="text"
                  placeholder="Enter Your Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "480px",
                  marginBottom: "30px",
                }}
              >
                <label style={{ marginTop: "20px" }}>Name on card</label>
                <input
                  style={{
                    marginTop: "10px",
                    padding: "10px",
                    fontSize: "18px",
                  }}
                  type="text"
                  placeholder="Enter Your Name On Card"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </div>
              <label>Expiry Month, Year & CVV</label>
              <div
                style={{
                  display: "flex",
                  width: "480px",
                  marginTop: "20px",
                  gap: "20px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <input
                    style={{ width: "200px", padding: "5px", fontSize: "18px" }}
                    type="number"
                    placeholder="Month"
                    value={expiryMonth}
                    onChange={(e) => setExpiryMonth(e.target.value)}
                  />
                  <input
                    style={{ width: "100px", padding: "5px", fontSize: "18px" }}
                    type="number"
                    placeholder="Year"
                    value={expiryYear}
                    onChange={(e) => setExpiryYear(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    style={{ width: "100px", padding: "5px", fontSize: "18px" }}
                    type="number"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={fetchPaymentData} className="PaymentPagePaybtn2">
                {" "}
                Pay Now
              </button>
              {error && (
                <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
              )}
              <p
                style={{ marginTop: "50px", fontSize: "11px", width: "480px" }}
              >
                By continuing to pay, i understand and agree with the{" "}
                <span style={{ color: "#008cff" }}>privacy policy</span>, the{" "}
                <span style={{ color: "#008cff" }}> user agreement</span> and{" "}
                <span style={{ color: "#008cff" }}>terms of service</span> of
                makemytrip
              </p>
            </div>
          )}
        </div>
        <div className="PaymentPage_Child_div_right">
          <div style={{ padding: "10px 20px 10px 20px" }}>
            <h3>Fare Summery</h3>
          </div>
          <div
            style={{
              padding: "10px 20px 10px 20px",
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid lightgray",
              marginTop: "10px",
            }}
          >
            <div>
              <h5 style={{ color: "gray" }}>Fare</h5>
              <h5 style={{ color: "gray", marginTop: "10px" }}>OTHERS</h5>
            </div>
            <div>
              <h5>&#8377; {fare}</h5>
            </div>
          </div>
          <div
            style={{
              padding: "10px 20px 10px 20px",
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid lightgray",
              marginTop: "10px",
            }}
          >
            <div>
              <h2>Total Due</h2>
              <small>Convenience fee added</small>
            </div>
            <div>
              <h3>&#8377; {fare}</h3>
            </div>
          </div>
        </div>
      </div>
      {selectedOption === "UPI" && showSuccessfull && <PaymentSuccessfull />}
    </div>
  );
}

export default PaymentPageFlight;
