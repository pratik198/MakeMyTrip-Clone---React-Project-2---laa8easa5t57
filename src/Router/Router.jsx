import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotelinput from "../Components/HotelInput/Hotelinput";
import Train from "../Components/TrainInput/Traininput";
import FlightCard from "../Components/FlightCard/FlightCard";
import FlightInput from "../Components/FlightInput/FlightInput";
import Hotelpage from "../Components/Page/HotelPage/Hotelpage";
import HotelDetails from "../Components/HotelDetails/HotelDetails";
import SearchHeader from "../Components/SearchHeader/SearchHeader";
import HeaderOnSecondaryPage from "../Components/Page/HotelPage/HeaderOnSecondaryPage";
import Traincard from "../Components/Traincard/Traincard";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FlightInput />} />
        <Route
          path="/HeaderOnSecondaryPage"
          element={<HeaderOnSecondaryPage />}
        />
        <Route path="/searchingheader" element={<SearchHeader />} />
        <Route path="/hoteldetails" element={<HotelDetails />} />
        <Route path="/hotelpage" element={<Hotelpage />} />
        <Route path="/hotels" element={<Hotelinput />} />
        <Route path="/traincard" element={<Traincard />} />
        <Route path="/flights" element={<FlightCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
