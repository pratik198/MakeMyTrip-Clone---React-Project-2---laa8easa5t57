import { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import date from "date-and-time";
import "./Hotelinput.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Main from "../Main/Main";

const HotelInputBox = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);
  const [hotelData, setHotelData] = useState(null);
  function handelplace(e) {
    console.log(e.target.value);
    setPlace(e.target.value);
  }
  const getData = async () => {
    console.log("get data called");
    
    const ApisUrl = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${place}","check_in":"${state.check_in}","check_out":"${state.check_out}"}&day="${day}"`;
    console.log(ApisUrl);
    try {
      const response = await fetch(ApisUrl, {
        headers: {
        projectID: "f104bi07c490",
        },
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      console.log(data?.data?.hotels);
      setHotelData(data?.data?.hotels);
      if (response.ok) {
        navigate("/hotelpage", { state: { hotelData11: data?.data?.hotels } });
      } else {
        console.error("Error while data fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // getData();
  }, []);

  const [type, setType] = useState("single");
  const initialSate = {
    // city: "mumbai",
    // check_in: "2023-02-15",
    // check_out: "2023-02-20",
    // guests: "2",
    city: "mumbai",
    check_in: date.format(new Date(), "YYYY-MM-DDTHH:mm"),
    check_out: date.format(date.addDays(new Date(), 5), "YYYY-MM-DDTHH:mm"),
    guests: "2",
  };
  const [state, setState] = useState(initialSate);
  const [day, setDay] = useState(date.format(new Date(), "dddd"));
  const changeHandler = (e) => {
    // const { name, value } = e.target;
    const { name, value } = e.target;
    if (name === "check_in" || name === "check_out") {
      const newDay = date.format(new Date(value), "dddd");
      setDay(newDay);
    }
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      <Main />
      <section className="input-box-wrapper">
        <div className="input-box">
          <div className="input-wrapper">
            <div className="input">
              <div className="top-sec">
                <div className={type === "single" ? "checked" : ""}>
                  <input
                    type="radio"
                    name="type"
                    id="single"
                    checked={type === "single"}
                    onChange={() => setType("single")}
                  />
                  <label htmlFor="single">Single</label>
                </div>
                <div className={type === "double" ? "checked" : ""}>
                  <input
                    type="radio"
                    name="type"
                    id="double"
                    checked={type === "double"}
                    onChange={() => setType("double")}
                  />
                  <label htmlFor="double">Double</label>
                </div>
                <div className={type === "king" ? "checked" : ""}>
                  <input
                    type="radio"
                    name="type"
                    id="king"
                    checked={type === "king"}
                    onChange={() => setType("king")}
                  />
                  <label htmlFor="king">King</label>
                </div>
              </div>
              <div className="bottom-sec">
                <div className="city">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    placeholder="city"
                    autoComplete="off"
                    name="city"
                    value={place}
                    onChange={handelplace}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        getData();
                      }
                    }}
                  />
                  <span>{place}, India</span>
                </div>

                <div>
                  <label htmlFor="check_in">
                    <span>Check In</span> <BiChevronDown className="icon" />{" "}
                  </label>
                  <div className="date">
                    <div>
                      <span>{date.format(new Date(state.check_in), `D `)}</span>
                      <p>{date.format(new Date(state.check_in), `MMM'YY`)}</p>
                    </div>
                    <div>{date.format(new Date(state.check_in), `dddd`)}</div>
                  </div>
                  <input
                    className={"date-input"}
                    type="date"
                    id="check_in"
                    autoComplete="off"
                    name="check_in"
                    value={state.check_in}
                    onChange={changeHandler}
                  />
                </div>
                <div>
                  <label htmlFor="check_out">
                    <span>Check Out</span> <BiChevronDown className="icon" />
                  </label>
                  <div className="date">
                    <div>
                      <span>
                        {date.format(new Date(state.check_out), `D `)}
                      </span>
                      <p>{date.format(new Date(state.check_out), `MMM'YY`)}</p>
                    </div>
                    <div>{date.format(new Date(state.check_out), `dddd`)}</div>
                  </div>

                  <input
                    className="date-input"
                    type="datetime-local"
                    id="check_out"
                    autoComplete="off"
                    name="check_out"
                    value={state.check_out}
                    onChange={changeHandler}
                    disabled={type === "oneway"}
                  />
                </div>
                <div className="guests">
                  <label htmlFor="guests">Guests</label>
                  <input
                    type="text"
                    id="guests"
                    placeholder="guests"
                    autoComplete="off"
                    name="guests"
                    value={state.guests}
                    onChange={(e) => {
                      const value = e.target.value;
                      const pattern = /^\d{0,10}(\.\d{0,2})?$/;
                      if (value.match(pattern)) {
                        changeHandler(e);
                      }
                    }}
                  />
                  <span>{state.guests} Guests</span>
                </div>
              </div>
              <div className="btm-hotel">
                <div className="sec">
                  <span>Recent Searches:</span>
                  <div>
                    <span>Goa</span>
                    <span>14 Feb'23</span>
                  </div>
                  <div>
                    <span>Delhi</span>
                    <span>24 Feb'23</span>
                  </div>
                </div>
                <div className="tranding">
                  <span>Trending Searches:</span>
                  <div>
                    <span>Banglore</span>
                  </div>
                  <div>
                    <span>Delhi</span>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={() => getData()} className="submit-btn">
              Search
            </button>

            <div className="explore">
              <img
                src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_downArrow.png"
                alt="arrow"
              />
              <span>Explore More</span>
              <img
                src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_downArrow.png"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelInputBox;
