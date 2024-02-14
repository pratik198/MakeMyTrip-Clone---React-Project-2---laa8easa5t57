import React, { useState } from "react";
import "./BusSearchComponent.css";
import SubNavigation from "../NavigationBar/SubNavigation/SubNavigation";
import Offers from "../Offers/Offers";
import ParentHeader from "../NavigationBar/ParentHeader/ParentHeader";
import PrimaryNavigation from "../NavigationBar/PrimaryNavigation/PrimaryNavigation";
import BusFromInput from "../ExtraComponents/BusFromToInput/BusFromInput";
import BusToInput from "../ExtraComponents/BusFromToInput/BusToInput";
import { useAuth } from "../context/MyContext";
import { useNavigate } from "react-router";
import DatePicker from "../ExtraComponents/DatePicker/DatePicker";

const BusSearchComponent = () => {
  const [BusFromOpen, setBusFromOpen] = useState(false);
  const [BusToOpen, setBusToOpen] = useState(false);
  const {busFromInput,busToInput} = useAuth();
  const navigate = useNavigate();

  const handleBusFormOpen = ()=>{
    setBusFromOpen(!BusFromOpen);
  }
  const handleBusToOpen = ()=>{
    setBusToOpen(!BusToOpen)
  }
  const handleBusSearchBtn = ()=>{
    navigate("/busdatapage")
  }
  return (
    <div className="BusSearchComponenet_Parent">
      <PrimaryNavigation />
      <ParentHeader />
      <SubNavigation />
      <div className="BusSearchComponenet_Child">
        <div className="BusSearchComponent_Child_radio">
          <p>Bus Ticket Booking.Travelling with a group? Hire a bus.</p>
        </div>
        <div className="BusSearchComponenet_Child_Input_detail">
          <div className="BusSearchComponenet_Child_Destination_Input">
            <div onClick={handleBusFormOpen}  className="BusSearchComponenet_Child_FromInput">
              <span>From</span>
              <span className="BusSearchComponenet_Child_FromInput_From">
                {busFromInput}
              </span>
            </div>
            {BusFromOpen && ( <BusFromInput onClose={handleBusFormOpen}/>)}
            <div onClick={handleBusToOpen} className="BusSearchComponenet_Child_ToInput">
              <span>To</span>
              <span className="BusSearchComponenet_Child_ToInput_From">
                {busToInput}
              </span>
            </div>
            {BusToOpen && (<div style={{position:"relative",left:"-380px"}}><BusToInput onClose={handleBusToOpen}/></div>)}
            <div className="BusSearchComponenet_Child_Departure">
              <span>Travel date</span>
              <DatePicker/>
              <span></span> 
            </div>
          </div>
        </div>
        <button onClick={handleBusSearchBtn} className="BusSearchComponenet_Button">SEARCH</button>
      </div>
      <Offers />
    </div>
  );
};
export default BusSearchComponent;
