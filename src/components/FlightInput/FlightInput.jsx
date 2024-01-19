import React, { useState } from "react";
import "./FlightInput.scss";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Main from "../Main/Main";

function FlightInput() {
  const [selectedDay, setSelectedDay] = useState("");
  const formattedDay = moment(selectedDay).format("dddd").substring(0, 3);
  console.log(formattedDay);
  return (
    <div>
      <Main />
      <div className="flight-input-section">
        <div className="top-sec">
          <div>
            <input type="radio" name="type" id="oneway" />
            <label htmlFor="oneway">One Way</label>
          </div>
          <div>
            <input type="radio" name="type" id="roundtrip" />
            <label htmlFor="roundtrip">Round Trip</label>
          </div>
          <div>
            <input type="radio" name="type" id="multicity" />
            <label htmlFor="multicity">Multi City</label>
          </div>
          <div>
            <p>Book International and Domestic Flights</p>
          </div>
        </div>
        <div className="middle__section">
          <div className="mid__sec_input_boxes">
            <div className="inner_section_box_1">
              <p>From</p>
              <input
                data-cy="fromCity"
                id="fromCity"
                type="text"
                class="fsw_inputField"
                readonly=""
                value="Mumbai"
              ></input>
              <p
                class="code makeRelative"
                title="BOM,Chhatrapati Shivaji International Airport India"
              >
                <span
                  data-cy="defaultFromValue"
                  title=""
                  class="truncate airPortName "
                >
                  BOM,Chhatrapati Shivaji International Airport India
                </span>
              </p>
            </div>
            <span className="fltSwipCircle">
              <span className="flt_inner">
                <img
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/landingSprite@21x.webp"
                  alt=".."
                />
              </span>
            </span>
            <div className="inner_section_box_2">
              <p>To</p>
              <input
                data-cy="toCity"
                id="toCity"
                type="text"
                class="fsw_inputField lineHeight36 latoBlack font30"
                readonly=""
                value="Bengaluru"
              ></input>
              <p
                class="code makeRelative"
                title="BLR, Bengaluru International Airport India"
              >
                <span
                  data-cy="defaultToValue"
                  title=""
                  class="truncate airPortName "
                >
                  BLR, Bengaluru International Airport India
                </span>
              </p>
            </div>
            <div className="inner_section_box_3">
              <p>Departure</p>
              <p
                data-cy="departureDate"
                class="blackText font20 code lineHeight36"
              >
                <span class="font30 latoBlack">12 </span>
                <span>Jan'</span>
                <span class="shortYear">24</span>
              </p>
              <p class="code_1" style={{ paddingTop: "0px" }}>
                Friday
              </p>
            </div>
            <div className="inner_section_box_4">
              <p>Return</p>
              <p
                data-cy="departureDate"
                class="blackText font20 code lineHeight36"
              >
                <span class="font30 latoBlack">18 </span>
                <span>Jan'</span>
                <span class="shortYear">24</span>
              </p>
              <p class="code_1" style={{ paddingTop: "0px" }}>
                Thursday
              </p>
            </div>
            <div className="inner_section_box_last">
              <p>Travellers & Class</p>
              <p
                data-cy="departureDate"
                class="blackText font20 code lineHeight36"
              >
                <span class="font30 latoBlack">1 </span>
                <span>Traveller</span>
              </p>
              <p class="code_1" style={{ paddingTop: "0px" }}>
                Economy/Premium Economy
              </p>
            </div>
          </div>
        </div>
      
        <button className="submit-btn">Search</button>
      </div>
    </div>
  );
}

export default FlightInput;
