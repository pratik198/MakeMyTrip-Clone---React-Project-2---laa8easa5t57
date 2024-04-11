import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import React, { useEffect } from "react";
import { useAuth } from "../../context/MyContext";
import { useState } from "react";
import "./DatePicket.css";
const DatePickerComponent = () => {
  const [isSelectedDayCheckOut, setSelectedDayCheckOut] = useState(new Date());
  const { setTravelDay } = useAuth();
  useEffect(() => {
    setTravelDay(isSelectedDayCheckOut);
  }, [isSelectedDayCheckOut]);
  const CustomInput = ({ value, onClick }) => (
    <input
      className="custom_input"
      style={{
        width: "100%",
        padding: "1rem",
        paddingLeft: "0",
        marginTop: "3px",
        border: "none",
        outline: "none",
        cursor: "pointer",
        backgroundColor: "transparent",
        fontSize: "23px", // equivalent to text-lg in Tailwind
        fontWeight: "bolder",
        // marginTop: "5px",
      }}
      type="text"
      value={moment(value).format("DD MMM' ddd")}
      onClick={onClick}
      readOnly
    />
  );
  return (
    <DatePicker
      selected={isSelectedDayCheckOut}
      onChange={(date) => setSelectedDayCheckOut(date)}
      customInput={<CustomInput />}
      minDate={new Date()}
    />
  );
};

export default DatePickerComponent;
