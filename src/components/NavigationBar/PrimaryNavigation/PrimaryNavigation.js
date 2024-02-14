import React, { useState } from "react";
import "./PrimaryNavigation.css";
import MakeMyTripLogo from "../../../Assets/mmtlogo1.png";
import MyTripBag from "../../../Assets/mytripbag.png";
import LoginSignUpButton from "../../../Assets/loginCreateAccountmmt.png";
import Login from "../../LoginSignUp/Login";
import { useNavigate } from "react-router";

const PrimaryNavigation = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [, forceUpdate] = useState();
  const navigate = useNavigate();

  const handleLoginOpen = () => {
    setLoginOpen(prevLoginOpen => !prevLoginOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    forceUpdate((prev) => !prev);
  };

  const jwt = localStorage.getItem("jwtToken");
  const jwtToken = localStorage.getItem("jwtToken");
  const handleopenBookinSummery = ()=>{
    if(jwtToken != null){
      navigate("/bookingsummery")
    }else{
      setLoginOpen(prevLoginOpen => !prevLoginOpen);
    }
  }

  return (
    <div className="PrimaryNavigation__parent">
      <img className="MakeMyTripLogo" src={MakeMyTripLogo} alt="MakeMyTripLogo" />
      <div className="MakeMyTripBag_Button_div">
        <img className="MyTripBag" src={MyTripBag} alt="MyTripBag" />
        <div onClick={handleopenBookinSummery} className="MakeMyTripBag_details">
          <p className="MakeMyTripBag_details-p1">My Trips</p>
          <p  className="MakeMyTripBag_details-p2">Manage My Bookings</p>
        </div>
        {jwt === null ? (
          <img onClick={handleLoginOpen} className="LoginSignUpButton" src={LoginSignUpButton} alt="LoginSignUpButton" />
          
        ) : (
          <div style={{width:"180px",display:"flex",alignItems:"center",borderLeft:"1px solid gray",cursor:"pointer"}}>
            <div style={{backgroundColor:"lightgreen", height:"30px", width:"30px",borderRadius:"50%",marginLeft:"10px",display:"flex" , alignItems:"center", justifyContent:"center"}}> <p style={{color:"white",fontWeight:"bold"}}>M</p></div>
            <p style={{fontSize:"12px",fontWeight:"bold",marginLeft:"10px", color:"white"}} onClick={handleLogout}>Hi {localStorage.getItem("name")}</p>
          </div>
        )}
      </div>
      {loginOpen && <Login onClose={handleLoginOpen} />}
    </div>
  );
};

export default PrimaryNavigation;
