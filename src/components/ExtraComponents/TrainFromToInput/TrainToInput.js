import React, { useState } from "react";
import { useAuth } from "../../context/MyContext";

const TrainToInput = ({ onClose }) => {
  const TrainJunction = [
    "Salem Junction",
    "Hubli Junction",
    "Udaipur City",
    "Vadodara Junction",
    "Dhanbad Junction",
    "Salem Junction",
    "Manmad Junction",
    "Vijayawada Junction",
    "Gorakhpur Junction",
    "Ghaziabad Junction",
    "Allahabad Junction",
    "Warangal",
    "Ambala Cantonment",
   " Howrah Junction",
   " Gorakhpur Junction",
    "Yesvantpur Junction",
    "Asansol Junction",
    "Nagpur Junction",
    "Visakhapatnam Junction",
    "Coimbatore Junction",
    "Thrissur",
    "Varanasi Junction",
    "Barddhaman Junction",
    "Chandigarh",
    "Udaipur City",
   " Salem Junction",
    "Bengaluru City Junction",
    "Nagpur Junction",
    "Kiul Junction",
    "Kharagpur Junction",
    "Erode Junction",
    "Coimbatore Junction",
    "Jodhpur Junction",
    "Pune Junction",
    "Chandigarh",
    "Anand Junction",
    "Vadodara Junction",
   "Katpadi Junction",
    "Raipur Junction",
    "Pune Junction",
    "Vadodara Junction",
    "Agra Cantonment",
    "Itarsi Junction",
    "Vijayawada Junction",
    "Ahmedabad Junction",
    "Hazrat Nizamuddin",
    "Chennai Central",
    "Pune Junction",
   "Allahabad Junction",
    "Guwahati",
   "Katpadi Junction",
    "Kanpur Central",
    "Hubli Junction",
    "New Delhi",
    "Kanpur Central",
    "Kharagpur Junction",
    "Kota Junction",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState(TrainJunction);
  const { setTrainJunctionTo } = useAuth();
  const [isTrainInputOpen, setIsTrainInputOpen] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    setInputValue(input);
    // Filter cities based on input
    const filtered = TrainJunction.filter((junction) =>
    junction.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredCities(filtered.length > 0 ? filtered : TrainJunction);
  };

  const handleInputChange = (selectedJunction) => {
    setInputValue(selectedJunction);
    setFilteredCities(TrainJunction);
    const index = TrainJunction.findIndex((junction) => junction === selectedJunction);
    setTrainJunctionTo(TrainJunction[index]);
    setIsTrainInputOpen(true);
    onClose(isTrainInputOpen);
  };

  return (
    <div className="w-67 h-55 absolute bg-slate-50 mt-10 p-2 rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-10">
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

export default TrainToInput;
