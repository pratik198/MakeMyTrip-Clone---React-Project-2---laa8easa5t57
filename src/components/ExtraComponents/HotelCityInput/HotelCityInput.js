import React, { useState } from "react";
import { useAuth } from "../../context/MyContext";

const HotelInput = ({ onClose }) => {
  const HotelCity = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Surat",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Jodhpur",
    "Dhanbad",
    "Gwalior",
    "Rajkot",
    "Kalyan-Dombivali",
    "Vasai-Virar",
    "Ludhiana",
    "Meerut",
    "Amritsar",
    "Agra",
    "Faridabad",
    "Coimbatore",
    "Varanasi",
    "Allahabad",
    "Vijayawada",
    "Jabalpur",
    "Raipur",
    "Srinagar",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState(HotelCity);
  const { setHotelCity } = useAuth();
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
    setHotelCity(HotelCity[index]);

    setIsHotelInputOpen(true);
    onClose(isHotelInputOpen);
  };

  return (
    <div
      className="w-67 h-55 absolute  mt-10 p-2 rounded "
      style={{
        boxShadow: "0px 4px 12px 1px rgba(0, 0, 0, 0.42)",
        backgroundColor: "white",
      }}
    >
      <input
        className="mb-3 w-full p-2 outline-none border-none"
        value={inputValue}
        onChange={handleChange}
        placeholder="Where do you want to stay?"
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

export default HotelInput;
