import React, { useState, useEffect } from "react";
import "./Offers.css";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [selectedOfferType, setSelectedOfferType] = useState("ALL");
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
  };

  return (
    <div className="Offers_Parent ">
      <div className="Offers_Child ">
        <div className="Offers_Navigation_filter">
          <h3>Offers</h3>
          <ul>
            <li onClick={() => handleOfferTypeChange("ALL")}>All Offers</li>
            <li onClick={() => handleOfferTypeChange("FLIGHTS")}>Flights</li>
            <li onClick={() => handleOfferTypeChange("HOTELS")}>Hotels</li>
            <li onClick={() => handleOfferTypeChange("HOLIDAYS")}>Holidays</li>
          </ul>
        </div>
        <div className="Offers_Parent_filtered_content">
          {loading ? (
            <p>Loading offers...</p>
          ) : (
            offers.map((offer) => (
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
      </div>
    </div>
  );
};

export default Offers;
