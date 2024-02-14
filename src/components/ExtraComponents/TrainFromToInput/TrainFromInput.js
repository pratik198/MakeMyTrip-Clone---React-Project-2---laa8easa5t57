import React, { useState } from "react";
import { useAuth } from "../../context/MyContext";

const TrainInput = ({ onClose }) => {
  const TrainJunction = [
    "Delhi Junction",
    "Dhanbad Junction",
    "Katpadi Junction",
    "Kanpur Central",
    "Kharagpur Junction",
    "Thiruvananthapuram Central",
    "Indore Junction",
    "Chandigarh",
    "Gwalior Junction",
    "Agra Cantonment",
    "Ambala Cantonment",
    "Bhusaval Junction",
    "Surat",
    "Manmad Junction",
    "Thrissur",
    "Visakhapatnam Junction",
    "Khurda Road Junction",
    "Ahmedabad Junction",
    "Chandigarh",
    "Moradabad Junction",
    "Secunderabad Junction",
    "Nagpur Junction",
    "Howrah Junction",
    "Ahmedabad Junction",
    "Agra Cantonment",
    "Mysuru Junction",
    "Visakhapatnam Junction",
    "Amritsar Junction",
    "Pune Junction",
    "Raipur Junction",
    "New Delhi",
    "Jhansi Junction",
    "Varanasi Junction",
    "Guwahati",
    "Thrissur",
    "Asansol Junction",
    "Nadiad Junction",
    "Moradabad Junction",
    "Bhopal Junction",
    "Yesvantpur Junction",
    "Indore Junction",
    "Kollam Junction",
    "Ludhiana Junction",
    "Bengaluru Cantt.",
    "Amritsar Junction",
    "Vijayawada Junction",
    "Bhopal Junction",
    "Warangal",
    "Ahmedabad Junction",
    "Anand Junction",
    "Ambala Cantonment",
    "Hubli Junction",
    "Jodhpur Junction",
    "Katpadi Junction",
    "Raipur Junction",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState(TrainJunction);
  const { setTrainJunctionFrom } = useAuth();
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
    setTrainJunctionFrom(TrainJunction[index]);
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

export default TrainInput;
