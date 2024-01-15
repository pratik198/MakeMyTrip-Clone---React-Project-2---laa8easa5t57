import React, { useState } from 'react';
import './Rating.scss'; 
const Rating = (props) => {
    const [rating, setRating] = useState(props.star);
 
  return (
    <div className="rating">
    {[...Array(5)].map((_, index) => (
      <span
        key={index}
        className={index < rating ? 'star-filled' : 'star-empty'}
      >
        &#9733; {/* Unicode character for a star */}
      </span>
    ))}
  </div>
  );
};

export default Rating;
