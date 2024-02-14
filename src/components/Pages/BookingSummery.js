import React, { useEffect, useState } from "react";
import "./BookingSummery.css";
import SecondaryNav2 from "../NavigationBar/SecondaryNavigation/SecondaryNav2";

function BookingSummery() {
  const [bookingData, setBookingdata] = useState([]);
  const [isData, setIsdata] = useState(false);

  useEffect(() => {
    const fetchBookingdata = () => {
      const api =
        "https://academics.newtonschool.co/api/v1/bookingportals/booking";
      const token = localStorage.getItem("jwtToken");
      const productid = "laa8easa5t57";
      fetch(api, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          projectID: productid,
        },
      })
        .then((response) => {
          if (response.ok) {
            const data = response.json();
            setIsdata(true);
            return data;
          }
        })
        .then((data) => {
          setBookingdata(data.data);
          console.log(data.data);
        });
    };
    fetchBookingdata();
  }, []);

  return (
    <div className="BookingSummery_ParentDiv">
      <SecondaryNav2 />
      <div className="BookingSummeryChild">
        <div className="BookingSummeryChild_dataDiv">
          <div className="BookingSummeryChild_dataDiv_Bookings">
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
              bookingData.map((bookingdetail, id) => (
                <div
                  key={id}
                  className="BookingSummeryChild_dataDiv_Bookingsdata"
                >
                  <div className="BookingSummeryChild_dataDiv_Bookingsdata_left">
                    <h4>
                      Booking Type :{" "}
                      <span style={{ fontSize: "14px" }}>
                        {bookingdetail.booking_type}
                      </span>
                    </h4>
                    <small>{bookingdetail.user.name} was Travelling</small>
                    <h4>{bookingdetail?.hotel?.name}</h4>
                    <h4 style={{ marginTop: "20px" }}>
                      Booking Status :{" "}
                      <span
                        style={{
                          fontSize: "14px",
                          color: "white",
                          backgroundColor: "green",
                        }}
                      >
                        Confirmed
                      </span>
                    </h4>
                  </div>
                  <h4>
                    Trip Id :{" "}
                    <span style={{ fontSize: "14px" }}>
                      {bookingdetail._id}
                    </span>
                  </h4>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSummery;
