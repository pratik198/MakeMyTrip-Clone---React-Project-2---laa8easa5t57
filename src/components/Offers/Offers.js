import React, { useState, useEffect } from "react";
import "./Offers.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlined from "@mui/icons-material/NavigateBeforeOutlined";
const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [selectedOfferType, setSelectedOfferType] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const offersPerPage = 6; // Number of offers to display per page

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const yourProjectID = "laa8easa5t57";
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"${selectedOfferType}"}`,
          {
            method: "GET",
            headers: {
              projectID: yourProjectID,
            },
          }
        );
        const data = await response.json();
        setOffers(data.data.offers);
      } catch (error) {
        console.error("Error fetching offers:", error);
        setOffers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, [selectedOfferType]);

  const handleOfferTypeChange = (type) => {
    setSelectedOfferType(type);
    setStartIndex(0); // Reset startIndex when offer type changes
  };

  // const handleNext = () => {
  //   setStartIndex((prevIndex) => prevIndex + offersPerPage);
  // };

  // const handlePrevious = () => {
  //   setStartIndex((prevIndex) => Math.max(prevIndex - offersPerPage, 0));
  // };
  // const handleNext = () => {
  //   setStartIndex((prevIndex) => (prevIndex + offersPerPage) % offers.length);
  // };

  // const handlePrevious = () => {
  //   setStartIndex(
  //     (prevIndex) => (prevIndex - offersPerPage + offers.length) % offers.length
  //   );
  // };
  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + offersPerPage) % offers.length);
  };

  const handlePrevious = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - offersPerPage + offers.length) % offers.length
    );
  };

  return (
    <div className="Offers_Parent">
      <div className="Offers_Child">
        <div className="Offers_Navigation_filter">
          <h3>Offers</h3>
          <ul>
            <li
              className={selectedOfferType === "ALL" ? "selected" : ""}
              onClick={() => handleOfferTypeChange("ALL")}
            >
              All Offers
            </li>
            <li
              className={selectedOfferType === "FLIGHTS" ? "selected" : ""}
              onClick={() => handleOfferTypeChange("FLIGHTS")}
            >
              Flights
            </li>
            <li
              className={selectedOfferType === "HOTELS" ? "selected" : ""}
              onClick={() => handleOfferTypeChange("HOTELS")}
            >
              Hotels
            </li>
            <li
              className={selectedOfferType === "HOLIDAYS" ? "selected" : ""}
              onClick={() => handleOfferTypeChange("HOLIDAYS")}
            >
              Holidays
            </li>
          </ul>
          <div className="divider_offer"></div>
          <div className="next_prev">
            <button
              onClick={handleNext}
              style={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "-1px 0px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <NavigateBeforeOutlined style={{ color: "#008cff" }} />
            </button>
            <button
              onClick={handleNext}
              style={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "-1px 0px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <NavigateNextOutlinedIcon style={{ color: "#008cff" }} />
            </button>
          </div>
        </div>
        <div className="Offers_Parent_filtered_content">
          {loading ? (
            <p>Loading offers...</p>
          ) : (
            offers
              .slice(startIndex, startIndex + offersPerPage)
              .map((offer) => (
                <div className="Offers_filtered_content" key={offer.id}>
                  <div className="Offers_filtered_content_image_container">
                    <img src={offer.heroUrl} alt={offer.title} />
                  </div>
                  <div className="Offers_filtered_content_details">
                    <p className="Offers_type">{offer.type}</p>
                    <p className="Offers_OfferText">{offer.pTl}</p>
                    <hr />
                    <p className="Offers_type2">{offer.pTx}</p>
                  </div>
                </div>
              ))
          )}
        </div>
        {/* <div className="button-container">
          {startIndex > 0 && <button onClick={handlePrevious}>Previous</button>}
          {startIndex + offersPerPage < offers.length && (
            <button onClick={handleNext}>Next</button>
          )} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Offers;
