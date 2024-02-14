import React, { useState } from "react";
import "./TravellersAndClass.css";
import { useAuth } from "../../context/MyContext";
const TravellersAndClass = ({ onclose }) => {
  const [modalClose, setModalClose] = useState(false);
  const {setTravellersCount} = useAuth();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleAdultsChange = (value) => {
    setAdults(value);
  };

  const handleChildrenChange = (value) => {
    setChildren(value);
  };

  const handleInfantsChange = (value) => {
    setInfants(value);
  };
  
  function handleClose() {
    setTravellersCount(adults+children+infants);
    setModalClose(true);
    onclose(modalClose);
  }
  return (
    <div className="TravellersAndClass_parent_container">
      <div className="TravellersAndClass_child_container_1">
        <p className="TravellersAndClass_p1">ADULTS (12y +)</p>
        <p className="TravellersAndClass_p2">on the day of travel</p>
        <ul>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
            <li
              key={value}
              className={value === adults ? "active" : ""}
              onClick={() => handleAdultsChange(value)}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="TravellersAndClass_child_container_2">
        <div className="TravellersAndClass_child_container_2_first">
          <p className="TravellersAndClass_p1">CHILDREN (2y - 12y )</p>
          <p className="TravellersAndClass_p2">on the day of travel</p>
          <ul>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <li
              key={value}
              className={value === children ? "active" : ""}
              onClick={() => handleChildrenChange(value)}
            >
              {value}
            </li>
          ))}
          </ul>
        </div>
        <div className="TravellersAndClass_child_container_2_second">
          <p className="TravellersAndClass_p1">INFANTS (below 2y)</p>
          <p className="TravellersAndClass_p2">on the day of travel</p>
          <ul>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <li
              key={value}
              className={value === infants ? "active" : ""}
              onClick={() => handleInfantsChange(value)}
            >
              {value}
            </li>
          ))}
          </ul>
        </div>
      </div>
      <button onClick={handleClose} className="TravellersAndClass_button">
        APPLY
      </button>
    </div>
  );
};
export default TravellersAndClass;
