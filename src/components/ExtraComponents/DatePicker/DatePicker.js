import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import React, { useEffect } from "react";
import { useAuth } from "../../context/MyContext";
import { useState } from "react";

const DatePickerComponent = () => {
  const [isSelectedDayCheckOut, setSelectedDayCheckOut] = useState("");
  const { setTravelDay} = useAuth();
  useEffect(()=>{
    setTravelDay(isSelectedDayCheckOut)
  },[isSelectedDayCheckOut])
  const CustomInput = ({ value, onClick }) => (
    <input
      className="w-full p-4 mt-3 border-none focus:outline-none text-sm cursor-pointer bg-transparent"
      type="text"
      value={moment(value).format("ddd")}
      onClick={onClick}
      readOnly
    />
  );
  return (
    <DatePicker
      selected={isSelectedDayCheckOut}
      onChange={(date) => setSelectedDayCheckOut(date)}
      customInput={<CustomInput />}
    />
  );
};

export default DatePickerComponent;
