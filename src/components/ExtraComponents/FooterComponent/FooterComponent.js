import React from "react";
import "./FooterComponent.css";
import flightExplore from "../../../Assets/flightsecctionexplore.png";
import qrcodeFooter from "../../../Assets/qrcodebooking.png";
import citylist from "../../../Assets/cityfooter.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

function FooterComponent() {
  const cityListRef = useRef(null);
  useEffect(() => {
    const handleCityListClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (cityListRef.current) {
      cityListRef.current.addEventListener("click", handleCityListClick);
    }

    return () => {
      if (cityListRef.current) {
        cityListRef.current.removeEventListener("click", handleCityListClick);
      }
    };
  }, []);
  return (
    <div className="footer_main">
      <div className="section_1">
        <img src={flightExplore} alt="Flight Explore" />
      </div>
      <div className="section_1">
        <img src={qrcodeFooter} alt=".." />
      </div>
      <div className="section_1">
        <img src={citylist} alt=".." ref={cityListRef} />
      </div>
      <div className="footer___text">
        <p className="text-[13px] fottttterer">
          <strong>PRODUCT OFFERING </strong> <br /> <br />
          Flights, International Flights, Charter Flights, Hotels, International
          Hotels, Homestays and Villas, Activities, Holidays In India,
          International Holidays, Book Hotels From UAE, myBiz for Corporate
          Travel, Book Online Cabs,
          <br /> Book Bus Tickets, Book Train Tickets, Cheap Tickets to India,
          Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards,
          Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip
          Advertising Solutions,
          <br /> One Way Cab <br />
          <br />
          <strong>MAKEMYTRIP</strong> <br /> <br />
          About Us, Investor Relations, Careers, MMT Foundation, Legal Notices,
          CSR Policy, myPartner - Travel Agent Portal, Foreign Exchange, List
          your hotel, Partners- Redbus, Partners- Goibibo, Partners-
          BookMyForex,
          <br /> Advertise with Us, RedBus Ferry Malaysia, RedBus Ferry
          Singapore <br /> <br />
          <strong>ABOUT THE SITE</strong> <br /> <br />
          Customer Support, Payment Security, Privacy Policy, Cookie Policy,
          User Agreement, Terms of Service, More Offices, Make A Payment, Work
          From Home, Report Security Issues <br /> <br />
          <strong>TOP HOTELS IN INDIA</strong> <br />
          <br />
          Fairmont Jaipur, St Regis Goa, Six Senses Fort Barwara, W Goa, Grand
          Hyatt Goa, Shangri-La Bangalore, The St Regis Mumbai, Taj Rishikesh,
          Grand Hyatt Mumbai, Le Meridien Delhi, Rambagh Palace Jaipur, Leela
          Palace Chennai,
          <br />
          The Leela Palace Udaipur, Taj Lake Palace Udaipur, Jw Marriott
          Chandigarh, Alila Diwa Goa, Le Meridien Goa, Taj Lands End Mumbai, Itc
          Grand Chola Chennai, Itc Maratha Mumbai, Oberoi Udaivilas, Jai Mahal
          Palace Jaipur,
          <br />
          Taj Mahal Tower Mumbai, Marriott Suites Pune, Park Hyatt Chennai, The
          Leela Palace Jaipur, Jw Marriott Mumbai Sahar, Jw Marriott Mumbai
          Juhu, The Ritz Carlton Bengaluru, The Oberoi New Delhi,
          <br /> Taj Resort & Convention Centre Goa, Taj Bengal Kolkata, Taj
          Coromandel Chennai, The Oberoi Gurgaon, The Westin Goa, Jw Marriott
          Hotel Pune, The Leela Palace New Delhi, Taj West End Bengaluru,
          <br /> The Taj Mahal Palace Mumbai, Best Hotels in India
          <br />
          <br />
          <strong>TOP INTERNATIONAL HOTELS</strong>
          <br />
          <br />
          Adaaran Club Rannalhi, Marina Bay Sands Singapore, Coco Bodu Hithi,
          Taj Dubai, Atlantis Hotel Dubai, Amari Phuket, Jw Marriott Dubai,
          Armani Hotel Dubai, Grand Hyatt Dubai, Saii Lagoon Maldives, Gevora
          Hotel Dubai,
          <br /> Hyatt Regency Dubai, Pan Pacific Singapore, The Palm Dubai,
          Caesars Palace, Baiyoke Sky Hotel, Centara Pattaya Hotel, Embudu
          Village, Orchard Hotel Singapore, Reethi Beach Resort, Ambassador
          Hotel Bangkok,
          <br /> Dusit Thani Pattaya, Shangri La Singapore, Sunbeam Hotel
          Pattaya, Taj Samudra Colombo, Bangkok Palace Hotel, Hilton Pattaya,
          Novotel Phuket Resort, Taj Exotica Resort Maldives, Village Hotel
          Bugis, Avani Atrium Bangkok,
          <br /> The Plaza New York, Village Hotel Albert Court, Amari Pattaya
          <br />
          <br />
          <strong>QUICK LINKS</strong>
          <br />
          <br />
          Delhi Chennai Flights, Delhi Mumbai Flights, Delhi Goa Flights,
          Chennai Mumbai flights, Mumbai Hyderabad flights, Kolkata to Rupsi
          Flights, Rupsi to Guwahati Flights, Pasighat to Guwahati Flights,
          Delhi to Khajuraho Flights,
          <br /> Cochin to Agatti Island Flights, Hotels in Delhi, Hotels in
          Mumbai, Hotels In Goa, Hotels In Jaipur, Hotels In Ooty, Hotels In
          Udaipur, Hotels in Puri, Hotels In North Goa, Hotels In Rishikesh,
          Honeymoon Packages, Kerala Packages,
          <br /> Kashmir Packages, Ladakh Packages, Goa Packages, Thailand
          Packages, Sri Lanka Visa, Thailand Visa, Explore Goa, Explore Manali,
          Explore Shimla, Explore Jaipur, Explore Srinagar
          <br />
          <br />
          <strong>IMPORTANT LINKS</strong>
          <br />
          <br />
          Cheap Flights, Flight Status, Kumbh Mela, Domestic Airlines,
          International Airlines, Indigo, Spicejet, GoAir, Air Asia, Air India,
          Indian Railways, Trip Ideas, Beaches, Honeymoon Destinations, Romantic
          Destinations,
          <br />
          Popular Destinations, Resorts In Udaipur, Resorts In Munnar, Villas In
          Lonavala, Hotels in Thailand, Villas In Goa, Domestic Flight Offers,
          International Flight Offers, UAE Flight Offers, USA, UAE, Saudi
          Arabia, UK, Oman
          <br />
          <br />
          <strong>CORPORATE TRAVEL</strong>
          <br />
          <br />
          Corporate Travel, Corporate Hotel Booking, Corporate Flight Booking,
          Business Travel for SME, GST Invoice for International flights,
          Business Travel Solutions, GST Invoice for Bus, Corporate Bus booking,
          <br /> myBiz - Best Business Travel Platform, GST Invoice for Flights,
          GST Invoice for Corporate Travel, GST Invoice for Hotels, myBiz for
          Small Business, Free cancellation on International Flights
          <br />
          <br />
        </p>
        <div className="footer">
          <div className="footer__end">
            <a href="https://twitter.com/makemytrip/">
              <TwitterIcon
                style={{
                  height: "40px",
                  width: "40px",
                  color: "white",
                }}
              />
            </a>
            <a href="https://www.facebook.com/makemytrip/">
              <FacebookIcon
                style={{
                  height: "40px",
                  width: "40px",
                  color: "white",
                }}
              />
            </a>
          </div>

          <h5 className="footer___ttext">
            © 2023 MAKEMYTRIP PVT. LTD. <br />
            &#10240;&#10240;&#10240;&#10240;&#10240;&#10240;Country India USA
            UAE
          </h5>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default FooterComponent;
