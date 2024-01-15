import React from "react";
import { useEffect, useState } from "react";
import "./Hotelcard.scss";
import Header2 from "../Header2/Header2";
import Rating from "./Rating";
import ratingRemark from "../../Utils/Utils";
import reviews from "../../Utils/Reviews";
import { Link } from "react-router-dom";
import Skeleton,{ SkeletonTheme } from "react-loading-skeleton";

function getRandomRating() {
  return Math.floor(Math.random() * 900) + 100; // Generates a random 4-digit number
}

function getRandomDiscount() {
  return Math.floor(Math.random() * 900) + 100; // Generates a random 3-digit number
}
function Hotelcard(props) {
  const randomRating = getRandomRating();
  const randomDiscount = getRandomDiscount();
  const [hoveredImage, setHoveredImage] = useState(props.image[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(delay);

  }, []);

  if (loading) {
    return (
      <div>
        <Header2 />
        <div className="hotel__cards skeleton-loading">
        <SkeletonTheme color="#5e6c77" highlightColor="#a9b7c1">
          <Skeleton count={10} duration={2} />
        </SkeletonTheme>
      </div>
      </div>
    );
  }


  return (
    <div>
      <Header2 />
      <div className="hotel__cards">
        <Link to="/hoteldetails" className="hotel__img">
          <img className="imgs-hotels" src={hoveredImage} alt=".." />
          <div className="small-pic">
            {props.image.slice(0, 4).map((image, index) => (
              <img
                key={index}
                className="small-img-hotels"
                src={image}
                alt="..."
                onMouseOver={() => setHoveredImage(image)}
              />
            ))}
          </div>
        </Link>
        <div className="hotel__name">
          <p>{props.name}</p>
          {props.unmarriedCouplesAllowed && (
            <div className="couple-frnd">
              <p className="cpl-frndly">Couple Friendly</p>
            </div>
          )}

          <div className="rating-star">
            <Rating star={props.rating} />
          </div>

          <div className="free-cancellation">
            <p className="line-free">&#x2713;{props.cancelationPolicy}</p>
          </div>
          <div className="hotel_reviews">
            <p className="hotel-reviews-line">{reviews(props.rating)}</p>
          </div>
        </div>
        <div className="hotel__rating">
          <div className="rating_remark">
            <span className="remark">{ratingRemark(props.rating)}</span>
          </div>
          <div className="rating-div">
            <p className="rating__color">{props.rating}</p>
            <p className="reviews-rating">({randomRating}&#160;Ratings)</p>
          </div>
          <div className="price_hotel">
            <p className="base-price">&#8377; {props.price.toLocaleString()}</p>
            <p className="cost">&#8377; {props.cost.toLocaleString()}</p>
            <p className="tax">
              &#43; &#8377; {props.tax.toLocaleString()} taxes & fees <br />
              Per Night
            </p>
            <p>{props.guest}</p>
            <p className="footer">Login to Book Now & Pay Later!</p>
          </div>
        </div>
        <div className="footer_offer">
          <p className="lines-discount">
            Exclusive Offer on instant book.Get INR {randomDiscount} Off{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hotelcard;
