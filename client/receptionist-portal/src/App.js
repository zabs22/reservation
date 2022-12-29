import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import { userInputs } from "./formSource";
import Bookings from "./pages/Booking/Bookings";
import NewBooking from "./pages/Booking/NewBooking";
import HotelList from "./pages/Hotel/HotelList";
import NewHotel from "./pages/Hotel/NewHotel";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Guest" />}
              />
            </Route>

              <Route path="hotels">
                <Route index element={<HotelList/>} />
                <Route path=":" element={<Single />} />
                <Route
                path="newHotel"
                element={<NewHotel title="Add New Hotel" />}
              />
            </Route>
              
            <Route path="bookings">
              <Route index element={<Bookings />} />
              <Route path=":bookingId" element={<Single />} />
              <Route
                path="newBooking"
                element={<NewBooking title="Add New Booking" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
