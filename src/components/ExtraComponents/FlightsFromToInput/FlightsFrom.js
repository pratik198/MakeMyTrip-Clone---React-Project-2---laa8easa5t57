import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/MyContext";
import "./FlightsTo.css";
const FlightsFrom = ({ onclose }) => {
  const [airport, setAirport] = useState("");
  const [airportDetail, setAirportDetail] = useState([]);
  const [liData, setLiData] = useState(false);
  const { setAriportFrom } = useAuth();

  const handleLiData = (name, city, cityFrom) => {
    setAriportFrom([city, name, cityFrom]);
    setLiData(true);
    onclose(liData);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setAirport(input);
  };

  useEffect(() => {
    const api = `https://academics.newtonschool.co/api/v1/bookingportals/airport?search={"city":"${airport}"}`;
    const projectId = "laa8easa5t57";

    const fetchData = () => {
      fetch(api, {
        method: "GET",
        headers: {
          projectID: projectId,
        },
      })
        .then((response) => {
          const data = response.json();

          return data;
        })
        .then((flightdata) => {
          const data = flightdata.data.airports;
          setAirportDetail(data);
        });
    };

    fetchData();
  }, [airport]);

  return (
    <div className="w-67 h-55 absolute bg-white mt-10 p-2 rounded shadow-[0px 4px 12px 1px rgba(0, 0, 0, 0.42)] flight__to">
      <input
        className=" mb-3 w-full p-2 outline-none"
        onChange={handleChange}
        placeholder="From"
      />
      <div className="w-80 h-40 overflow-auto scrollbar">
        <ul className=" cursor-pointer ">
          {airportDetail.map((data, index) => (
            <li
              onClick={() => {
                handleLiData(data.name, data.city, data.iata_code);
              }}
              className="mt-2"
              key={index}
            >
              {data.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightsFrom;
