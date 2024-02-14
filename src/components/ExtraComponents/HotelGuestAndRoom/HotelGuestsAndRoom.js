import React, { useState } from "react";
import "./HotelGuestsAndRoom.css";
import { useAuth } from "../../context/MyContext";

const HotelGuestsAndRoom = ({ onClose }) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isRoomOption, setIsRoomOption] = useState(1);
    const [isAdultOption, setIsAdultOption] = useState(1);
    const {setHotelRoomNo,setHotelAdultNo} = useAuth();

    const handleApplyButton = () => {
        setIsButtonClicked(true);
        onClose(isButtonClicked);
    };

    const handleRoomChange = (event) => {
        setIsRoomOption(event.target.value);
        setHotelRoomNo(event.target.value)
    };

    const handleAdultChange = (event) => {
        setIsAdultOption(event.target.value);
        setHotelAdultNo(event.target.value)
    };

    return (
        <div className="HotelGuestsAndRoom_Parent">
            <div className="HotelGuestsAndRoom_Rooms">
                <span>Rooms</span>
                <select value={isRoomOption} onChange={handleRoomChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                </select>
            </div>
            <div className="HotelGuestsAndRoom_Adults">
                <span>Adults</span>
                <select value={isAdultOption} onChange={handleAdultChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                </select>
            </div>
            <button className="HotelGuestsAndRoom_ApplyButton" onClick={handleApplyButton}>Apply</button>
        </div>
    );
};

export default HotelGuestsAndRoom;
