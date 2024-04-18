import React, { useEffect, useState } from "react";
import "./BookingSummery.css";
import SecondaryNav2 from "../NavigationBar/SecondaryNavigation/SecondaryNav2";

function BookingSummery() {
  const [bookingData, setBookingData] = useState([]);
  const [isData, setIsData] = useState(false);
  const [bookingType, setBookingType] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      const api =
        "https://academics.newtonschool.co/api/v1/bookingportals/booking";
      const token = localStorage.getItem("jwtToken");
      const productid = "laa8easa5t57";
      try {
        const response = await fetch(api, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: productid,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBookingData(data.data);
          setIsData(true);
        }
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    fetchBookingData();
  }, []);

  const handleType = (type) => {
    if (bookingType === type) {
      setBookingType(null);
    } else {
      setBookingType(type);
    }
  };

  const filteredData = bookingType
    ? bookingData.filter((booking) => booking.booking_type === bookingType)
    : bookingData;

  return (
    <div className="BookingSummery_ParentDiv">
      <SecondaryNav2 />
      <div className="BookingSummeryChild">
        <div className="BookingSummeryChild_dataDiv">
          <div className="BookingSummeryChild_dataDiv_Bookings">
            <div className="booking__butonssss">
              <button
                className="btn__booking_summry"
                onClick={() => handleType("flight")}
              >
                Flight
              </button>
              <button
                className="btn__booking_summry"
                onClick={() => handleType("hotel")}
              >
                Hotel
              </button>
              <button
                className="btn__booking_summry"
                onClick={() => handleType("bus")}
              >
                Bus
              </button>
              <button
                className="btn__booking_summry"
                onClick={() => handleType("train")}
              >
                Train
              </button>
            </div>
            <div className="BookingSummeryChild_dataDiv_Bookings_imgDiv">
              <img
                className="BookingSummeryChild_dataDiv_Bookings_img"
                src="https://imgak.mmtcdn.com/mima/images/Desktop/mytripSprite.png"
                alt="Bookings"
              />
            </div>
            <h4>Bookings</h4>
          </div>
          <div className="BookingSummeryChild_dataDiv_NoBookings">
            {isData ? (
              filteredData.length > 0 ? (
                filteredData.map((bookingDetail, id) => (
                  <div
                    key={id}
                    className="BookingSummeryChild_dataDiv_Bookingsdata"
                  >
                    <div className="BookingSummeryChild_dataDiv_Bookingsdata_left">
                      <h4>
                        Booking Type :{" "}
                        <span style={{ fontSize: "14px" }}>
                          {bookingDetail.booking_type}
                        </span>
                      </h4>
                      <small>{bookingDetail.user.name} was Travelling</small>
                      {bookingDetail.hotel && (
                        <h4>{bookingDetail.hotel.name}</h4>
                      )}
                      <p style={{ marginTop: "20px" }}>
                        Booking Status :{" "}
                        <span
                          style={{
                            // fontSize: "14px",
                            color: "white",
                            backgroundColor: "green",
                          }}
                        >
                          Confirmed
                        </span>
                      </p>
                    </div>
                    <p className="h444____dask">
                      Trip Id :{" "}
                      <span
                        className="h444____dask__"
                        style={{ fontSize: "14px" }}
                      >
                        {bookingDetail._id}
                      </span>
                    </p>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "310px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://imgak.mmtcdn.com/mima/images/Desktop/upcoming-empty.png"
                    alt="Empty"
                  />
                  <div>
                    <h3>Looks empty, you've no upcoming bookings.</h3>
                    <small>
                      When you book a trip, you will see your itinerary here.
                    </small>
                  </div>
                </div>
              )
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSummery;
