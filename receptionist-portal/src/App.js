import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import { userInputs, productInputs } from "./formSource";
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
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="bookings">
              <Route index element={<List />} />
              <Route path=":bookingId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Booking" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
