import React, { useState } from "react";
import "./TrainSearchComponent.css";
import SubNavigation from "../NavigationBar/SubNavigation/SubNavigation";
import Offers from "../Offers/Offers";
import ParentHeader from "../NavigationBar/ParentHeader/ParentHeader";
import PrimaryNavigation from "../NavigationBar/PrimaryNavigation/PrimaryNavigation";
import { useAuth } from "../context/MyContext";
import DatePicker from "../ExtraComponents/DatePicker/DatePicker";
import { useNavigate } from "react-router";
import TrainInput from "../ExtraComponents/TrainFromToInput/TrainFromInput";
import TrainToInput from "../ExtraComponents/TrainFromToInput/TrainToInput";

const TrainSearchComponent = () => {
  const [TrainFromOpen, setTrainFromOpen] = useState(false);
  const [TrainToOpen , setTrainsToOpen] = useState(false);
  const { trainJunctionTo,trainJunctionFrom } = useAuth();
  const navigate = useNavigate();

  const handleTrainFormOpen = () => {
    setTrainFromOpen(!TrainFromOpen);
  };
  const handleSearch = () => {
    navigate("/traindatapage");
  };
  const handleTrainToOpen = ()=>{
    setTrainsToOpen(!TrainToOpen);
  }
  return (
    <div className="TrainSearchComponenet_Parent">
      <PrimaryNavigation />
      <ParentHeader />
      <SubNavigation />
      <div className="TrainSearchComponenet_Child">
        <div className="TrainlightSearchComponent_Child_radio">
          <p>Train Ticket Booking IRCTC Authorized e-ticketing</p>
        </div>
        <div className="TrainSearchComponenet_Child_Input_detail">
          <div className="TrainSearchComponenet_Child_Destination_Input">
            <div
              onClick={handleTrainFormOpen}
              className="TrainSearchComponenet_Child_FromInput"
            >
              <span>From</span>
              <span className="TrainSearchComponenet_Child_FromInput_From">
                {trainJunctionFrom}
              </span>
            </div>
            {TrainFromOpen && <TrainInput onClose={handleTrainFormOpen} />}
            <div onClick={handleTrainToOpen} className="TrainSearchComponenet_Child_ToInput">
              <span>To</span>
              <span className="TrainSearchComponenet_Child_ToInput_From">{trainJunctionTo}</span>
            </div>
            {TrainToOpen && <div className="TrainToInput">
              <TrainToInput onClose={handleTrainToOpen}/>
            </div> }
            <div className="TrainSearchComponenet_Child_Departure">
              <span>Travel Date</span>
              <DatePicker />
              <span></span>
            </div>
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="FlightSearchComponenet_Button"
        >
          SEARCH
        </button>
      </div>
      <Offers />
    </div>
  );
};
export default TrainSearchComponent;
