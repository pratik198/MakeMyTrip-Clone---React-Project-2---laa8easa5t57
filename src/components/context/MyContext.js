import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [AirportFrom, setAriportFrom] = useState([
    "Delhi",
    "Indira Gandhi International Airport",
    "PNQ",
  ]);
  const [AirportTo, setAriportTo] = useState([
    "Goa",
    "Goa International Airport",
    "LKO",
  ]);
  const [travellersCount, setTravellersCount] = useState(1);
  const [travelDay, setTravelDay] = useState(new Date());
  const [hotelCity, setHotelCity] = useState(["Mumbai"]);
  const [trainJunctionFrom, setTrainJunctionFrom] = useState(["Surat"]);
  const [trainJunctionTo, setTrainJunctionTo] = useState(["Udaipur City"]);
  const [hotelRoomNo, setHotelRoomNo] = useState(1);
  const [hotelAdultNo, setHotelAdultNo] = useState(1);
  // const [travelDay, setTravelDay] = useState("");
  const [flightData, setFlightData] = useState([]);
  const [flightId, setFlightId] = useState("");
  const [hotelCheckin, setHotelCheckin] = useState(new Date());
  // const [hotelCheckOut, setHotelCheckOut] = useState(new Date());
  const [hotelCheckOut, setHotelCheckOut] = useState(() => {
    const nextDay = new Date(hotelCheckin);
    nextDay.setDate(hotelCheckin.getDate() + 1);
    return nextDay;
  });
  const [busFromInput, setBusFromInput] = useState(["Mumbai"]);
  const [busToInput, setBusToInput] = useState(["Delhi"]);
  const [hotelDetaiId, setHotelDetailId] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [FlightBookingId, setFlightBookingId] = useState("");
  const [HotelBookinId, setHotelBookingId] = useState("");
  const [TrainBookingId, setTrainBookingId] = useState("");
  const [BusBookingId, setBusBookingId] = useState("");
  const [fare, setFare] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [bookingId, setBookingId] = useState("");

  return (
    <AuthContext.Provider
      value={{
        bookingId,
        setBookingId,
        bookingType,
        setBookingType,
        fare,
        setFare,
        AirportFrom,
        setAriportFrom,
        AirportTo,
        setAriportTo,
        travellersCount,
        setTravellersCount,
        hotelCity,
        setHotelCity,
        hotelRoomNo,
        setHotelRoomNo,
        hotelAdultNo,
        setHotelAdultNo,
        travelDay,
        setTravelDay,
        flightData,
        setFlightData,
        flightId,
        setFlightId,
        trainJunctionFrom,
        setTrainJunctionFrom,
        trainJunctionTo,
        setTrainJunctionTo,
        hotelCheckin,
        setHotelCheckin,
        hotelCheckOut,
        setHotelCheckOut,
        busFromInput,
        setBusFromInput,
        busToInput,
        setBusToInput,
        hotelDetaiId,
        setHotelDetailId,
        selectedSeats,
        setSelectedSeats,
        FlightBookingId,
        setFlightBookingId,
        HotelBookinId,
        setHotelBookingId,
        TrainBookingId,
        setTrainBookingId,
        BusBookingId,
        setBusBookingId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
