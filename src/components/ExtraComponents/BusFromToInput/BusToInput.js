import React, { useState } from "react";
import { useAuth } from "../../context/MyContext";
import "./Buss.css";
const BusToInput = ({ onClose }) => {
  const HotelCity = [
    "Indore, Madhya Pradesh",
    "Vadodara, Gujarat",
    "Varanasi, Uttar Pradesh",
    "Ghaziabad, Uttar Pradesh",
    "Meerut, Uttar Pradesh",
    "Rajkot, Gujarat",
    "Visakhapatnam, Andhra Pradesh",
    "Thane, Maharashtra",
    "Kanpur, Uttar Pradesh",
    "Delhi, National Capital Territory of Delhi",
    "Vijayawada, Andhra Pradesh",
    "Chennai, Tamil Nadu",
    "Hyderabad, Telangana",
    "Pune, Maharashtra",
    "Ahmedabad, Gujarat",
    "Jaipur, Rajasthan",
    "Lucknow, Uttar Pradesh",
    "Pimpri-Chinchwad, Maharashtra",
    "Patna, Bihar",
    "Vadodara, Gujarat",
    "Ludhiana, Punjab",
    "Agra, Uttar Pradesh",
    "Nashik, Maharashtra",
    "Faridabad, Haryana",
    "Kalyan-Dombivali, Maharashtra",
    "Vasai-Virar, Maharashtra",
    "Kolkata, West Bengal",
    "Surat, Gujarat",
    "Srinagar, Jammu and Kashmir",
    "Dhanbad, Jharkhand",
    "Jodhpur, Rajasthan",
    "Coimbatore, Tamil Nadu",
    "Jabalpur, Madhya Pradesh",
    "Gwalior, Madhya Pradesh",
    "Allahabad, Uttar Pradesh",
    "Raipur, Chhattisgarh",
    "Amritsar, Punjab",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState(HotelCity);
  const { setBusToInput } = useAuth();
  const [isHotelInputOpen, setIsHotelInputOpen] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    setInputValue(input);
    const filtered = HotelCity.filter((city) =>
      city.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredCities(filtered.length > 0 ? filtered : HotelCity);
  };

  const handleInputChange = (selectedCity) => {
    setInputValue(selectedCity);
    setFilteredCities(HotelCity);
    const index = HotelCity.findIndex((city) => city === selectedCity);
    setBusToInput(HotelCity[index]);

    setIsHotelInputOpen(true);
    onClose(isHotelInputOpen);
  };

  return (
    <div className="w-67 h-55 absolute bg-slate-50 mt-10 p-2 rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-10 bussssss">
      <input
        className="mb-3 w-full p-2"
        value={inputValue}
        onChange={handleChange}
      />
      <div className="w-80 h-40 overflow-auto scrollbar">
        <ul className="cursor-pointer">
          {filteredCities.map((data, index) => (
            <li
              onClick={() => {
                handleInputChange(data);
              }}
              className="mt-2"
              key={index}
            >
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BusToInput;
