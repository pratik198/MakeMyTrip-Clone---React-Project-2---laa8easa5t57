import React from "react";
import "./HotelDetails.scss";
import { useState, useEffect } from "react";
import Header2 from "../Header2/Header2";
import { useLocation } from "react-router";
import Next from "../../Assets/img/next.png";
import Previous from "../../Assets/img/previous.png";
import Rating from "../HotelCard/Rating";

function HotelDetails(props) {
  const location = useLocation();
  const hotelDetail = location?.state?.hotelDetail || "";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const starRating = location.state.starRating1 || undefined;
  console.log(starRating);

  var randomStarRating = getRandomNum();
  console.log(randomStarRating);
  function getRandomNum() {
    const a = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    return a;
  }

  useEffect(() => {
    console.log(location.state?.hotelDetail);
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? hotelDetail.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === hotelDetail.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Header2 />
      <div className="hotel-details-main">
        <div className="hotel-initial-part">
          <div className="first-section">
            <div className="hotel-image-font-pic">
              <img src={hotelDetail.images[currentImageIndex]} alt="Hotel" />
              <button onClick={handlePrevClick}>
                <img src={Previous} alt="Previous" />
              </button>
              <button onClick={handleNextClick}>
                <img src={Next} alt="Next" />
              </button>
            </div>
          </div>
          <div className="second-section">
            <div className="hotel-images-small">
              <img src={hotelDetail.images[1]} alt="Hotel" />
              <img src={hotelDetail.images[2]} alt="Hotel" />
            </div>
          </div>
          <div className="third-section">
            <div className="book_section_details">hello</div>
            <div className="footer_book">
              <div className="footer__first">hello</div>
              <div className="footer__first">hello</div>
            </div>
          </div>
        </div>
        <div className="hotel-star-rating">
          <h1>{hotelDetail.name}</h1>
          <p>
            {starRating !== undefined ? starRating : randomStarRating}star hotel
          </p>
          <Rating star={hotelDetail.rating} />
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
