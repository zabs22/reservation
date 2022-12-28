import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import { userInputs } from "./formSource";
import ManagerList from "./pages/managerlist/ManagerList";
import Bookings from "./pages/bookings/Bookings";
import NewBooking from "./pages/bookings/NewBooking";
import NewManager from "./pages/managerlist/NewManager";

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

              <Route path="managers">
                <Route index element={<ManagerList/>} />
                <Route path=":managerId" element={<Single />} />
                <Route
                path="newmanager"
                element={<NewManager title="Add New Manager" />}
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
