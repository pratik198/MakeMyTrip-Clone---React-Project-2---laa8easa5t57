import React from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import FlightSearchComponent from "../SearchComponents/FlightSearchComponent";
import HotelSearchComponent from "../SearchComponents/HotelSearchComponent";
import TrainSearchComponent from "../SearchComponents/TrainSearchComponent";
import BusSearchComponent from "../SearchComponents/BusSearchComponent";
import CommingSoonSearch from "../ExtraComponents/CommingSoon/CommingSoonSearch";
import FlightDataPage from "../Pages/FlightDataPage";
import HotelDataPage from "../Pages/HotelDataPage";
import TrainDataPage from "../Pages/TrainDataPage";
import BusDataPage from "../Pages/BusDataPage";
import HotelDetailDataPage from "../Pages/HotelDetailDataPage";
import BookingSummery from "../Pages/BookingSummery";
import PrivateRouter from "./PrivateRouter";
import BookingPageFlight from "../Pages/BookingPageFlight";
import BookingPageHotel from "../Pages/BookingPageHotel";
import BookingPageTrain from "../Pages/BookingPageTrain";
import BookingPageBus from "../Pages/BookingPageBus";
import PaymentPageHotel from "../Pages/PaymentPageHotel";
import PaymentPageTrain from "../Pages/PaymentPageTrain";
import PaymentPageBus from "../Pages/PaymentPageBus";
import PaymentPageFlight from "../Pages/PaymentPageFlight";

const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FlightSearchComponent/>}/>
                <Route path="/commingsoonsearch" element={<CommingSoonSearch/>}/>
                <Route path="/hotelsearch" element={<HotelSearchComponent/>}/>
                <Route path="/trainsearch" element={<TrainSearchComponent/>}/>
                <Route path="/bussearch" element={<BusSearchComponent/>}/>
                <Route path="/flightdatapage" element={<FlightDataPage/>}/>
                <Route path="/hoteldatapage" element={<HotelDataPage/>}/>
                <Route path="/traindatapage" element={<TrainDataPage/>}/>
                <Route path="/busdatapage" element={<BusDataPage/>}/>
                <Route path="/hoteldetaildatapage" element={<HotelDetailDataPage/>}/>
                <Route element={<PrivateRouter/>}>
                    <Route path="/bookingsummery" element={<BookingSummery/>}/>
                    <Route path="/bookingpageflight" element={<BookingPageFlight/>}/>
                    <Route path="/bookingpagehotel" element={<BookingPageHotel/>}/>
                    <Route path="/bookingpagetrain" element={<BookingPageTrain/>}/>
                    <Route path="/bokkingpagebus" element={<BookingPageBus/>}/>
                    <Route path="/paymentpagehotel" element={<PaymentPageHotel/>}/>
                    <Route path="/paymentpageBus" element={<PaymentPageBus/>}/>
                    <Route path="/paymentpageFlight" element={<PaymentPageFlight/>}/>
                    <Route path="/paymentpageTrain" element={<PaymentPageTrain/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;