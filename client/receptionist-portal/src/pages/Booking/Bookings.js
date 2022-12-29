import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const columns = [
    { field: 'bookingId', headerName: 'Booking ID', width: 90 },
    { field: 'hotelCode', headerName: 'Hotel Code', width: 90 },
    { field: 'id', headerName: 'User ID', width: 90 },
    { field: 'roomNo', headerName: 'Room Number', width: 130 },
    {
      field: 'bookingDate',
      headerName: 'Booking Date',
      width: 190,
      editable: false,
    },
    {
      field: 'checkIn',
      headerName: 'Check In Date',
      width: 160,
      editable: false,
    },
    {
      field: 'checkOut',
      headerName: 'Check Out Date',
      type: 'number',
      width: 160,
      editable: false,
    },
    {
      field: 'numAdults',
      headerName: 'Num of Adults',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'numChild',
      headerName: 'Num of Children',
      type: 'number',
      width: 160,
      editable: false,
    },
  ];
  
  const rows = [
    { bookingId: 100, id: 1, hotelCode: "hc-100", roomNo: "rNo-100", bookingDate: '23-01-22 - 27-01-22', checkIn: '23-01-22', checkOut: '27-01-22', numAdults: 1, numChild: 0 },
    { bookingId: 101, id: 2, hotelCode: "hc-101", roomNo: "rNo-101", bookingDate: '23-01-22 - 27-01-22', checkIn: '23-01-22', checkOut: '27-01-22', numAdults: 1, numChild: 0 },
    { bookingId: 103, id: 3, hotelCode: "hc-102", roomNo: "rNo-102", bookingDate: '23-01-22 - 27-01-22', checkIn: '23-01-22', checkOut: '27-01-22', numAdults: 2, numChild: 1 },
    { bookingId: 104, id: 4, hotelCode: "hc-103", roomNo: "rNo-103", bookingDate: '23-01-22 - 27-01-22', checkIn: '23-01-22', checkOut: '27-01-22', numAdults: 1, numChild: 1 },
    { bookingId: 105, id: 5, hotelCode: "hc-104", roomNo: "rNo-104", bookingDate: '23-01-22 - 27-01-22', checkIn: '23-01-22', checkOut: '27-01-22', numAdults: 2, numChild: 2 },
    { bookingId: 106, id: 6, hotelCode: "hc-105", roomNo: "rNo-105", bookingDate: '23-01-22 - 27-01-22', checkIn: '23-01-22', checkOut: '27-01-22', numAdults: 1, numChild: 0 },
    { bookingId: 107, id: 7, hotelCode: "hc-106", roomNo: "rNo-106", bookingDate: '23-01-22 - 27-01-22', checkIn: '23-01-22', checkOut: '27-01-22', numAdults: 1, numChild: 0 },
    { bookingId: 108, id: 8, hotelCode: "hc-107", roomNo: "rNo-107", bookingDate: '23-01-22 - 27-01-22', checkIn: '23-01-22', checkOut: '27-01-22', numAdults: 1, numChild: 0 },
    { bookingId: 109, id: 9, hotelCode: "hc-108", roomNo: "rNo-108", bookingDate: '23-01-22 - 27-01-22', checkIn: '23-01-22', checkOut: '27-01-22', numAdults: 2, numChild: 0 },
  ];

export default function Bookings() {
  return (
    <>
    <div className="list">
        <Sidebar />

    <div className="listContainer">
        <NavBar />

        <div className="datatableTitle">
            <h2>Bookings for My Hotel</h2>
        </div>

        <div style={{
            position: "absolute",
            top: 60,
            right: 0,
            padding: "5px",
            fontSize: "18px",
            cursor: "pointer",
        }}>
            <Link to="/bookings/newBooking" style={{ textDecoration: "none" }}>
                <Button
                    variant="contained"
                    sx={{mt: 6, mr: 3 }}
                >Add New Reservation</Button>
            </Link>
        </div>
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
        />
        </Box>
        </div>
        </div>
    </>
  );
}