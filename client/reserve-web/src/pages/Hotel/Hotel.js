import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"
import PlaceIcon from "@mui/icons-material/Place";

import "./Hotel.css";
import MapPage from "../../components/map/MapPage";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  const handleClick = () => {
     if(true) {
      navigate("/reserve");
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <CloseIcon
              className="close"
              onClick={() => setOpen(false)}
            />
            <ArrowBackIcon
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <ArrowForwardIcon
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
            <button className="bookNow" onClick={handleClick}>Reserve or Book Now!</button>
          <h1 className="hotelTitle">Addis Guest House</h1>
          <div className="hotelAddress">
            <PlaceIcon />
            <span>Addis Ababa, Ethiopia</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m 
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ETB 112 at this hotel and enjoy your stay
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              A great choice for a stay in Addis Ababa, Addis Guest house offers a free airport shuttle (available 24 hours). 
              Guests can indulge in deep-tissue massages or manicures and pedicures, and Degeman and Arada Soho, 
              one of 2 restaurants, serves international cuisine and is open for breakfast, lunch and dinner. 
              Other highlights at this upmarket hotel include 2 bars/lounges, an indoor pool and a health club. 
              Fellow travellers say good things about the helpful staff and WiFi.
              </p>
              
            </div>

            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this hotel has an
                excellent rating score of 9.8!
              </span>
              <h2>
                <b>ETB 945</b> (9 nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>

         {/* Map */}
         <h2>Room Types</h2> 
          <div className="roomTypes">
              {/* Card for rooms */}
            <div className="projcard-container">
              <div className="projcard projcard-blue">
                <div className="projcard-innerbox">
                  <img className="projcard-img" alt="project" src="https://images.trvl-media.com/hotels/16000000/15170000/15163700/15163659/670976a1.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" />
                  <div className="projcard-textbox">
                    <div className="projcard-title">Standard Room</div>
                    <div className="projcard-subtitle">Our Standard Room has:</div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">
              one of 2 restaurants, serves international cuisine and is open for breakfast, lunch and dinner. 
              Other highlights at this upmarket hotel include 2 bars/lounges, an indoor pool and a health club. 
              WiFi.
                    </div>
                    <div className="projcard-tagbox">
                      <button className="bookNow">Reserve</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map on the right */}
            <div className="maps">
        <MapPage />
        </div>
         </div>   
        </div>
        {/* Map */}

        
      </div>
    </div>
  );
};

export default Hotel;
