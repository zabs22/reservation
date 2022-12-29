import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'hotelCode', headerName: 'Hotel Code', width: 90 },
    { field: 'roomNo', headerName: 'Room No', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'Price per Room',
      type: 'number',
      width: 140,
      editable: false,
    },
    {
      field: 'maxPeople',
      headerName: 'Max No of People',
      type: 'number',
      width: 220,
      editable: false,
    },
    {
      field: 'desc',
      headerName: 'Description',
      type: 'name',
      width: 160,
      editable: false,
    },
    {
        field: 'roomNos',
        headerName: 'Room Nos',
        type: 'name',
        width: 90,
        editable: false,
      },
  ];
  
  const rows = [
    { id: 1, hotelCode: 10, roomNo: 101, title: 'Capital', price: 35, maxPeople: 8, desc: 'Hello', roomNos: 201, },
    { id: 2, hotelCode: 20, roomNo: 102, title: 'Harmony', price: 42, maxPeople: 5, desc: 'Zabs', roomNos: 201,  },
    { id: 3, hotelCode: 30, roomNo: 103, title: 'Sheraton', price: 45, maxPeople: 6, desc: 'Hello', roomNos: 201,  },
    { id: 4, hotelCode: 40, roomNo: 104, title: 'Hilton', price: 16, maxPeople: 3, desc: 'Hello', roomNos: 201,  },
    { id: 5, hotelCode: 50, roomNo: 105, title: 'Ghion', price: 34, maxPeople: 2, desc: 'Hello', roomNos: 201,  },
    { id: 6, hotelCode: 60, roomNo: 106, title: 'Washington', price: 150, maxPeople: 5, desc: 'Hello', roomNos: 201,  },
    { id: 7, hotelCode: 70, roomNo: 107, title: 'Addis', price: 44, maxPeople: 7, desc: 'Hello', roomNos: 201,  },
    { id: 8, hotelCode: 80, roomNo: 108, title: 'Hello', price: 36, maxPeople: 4, desc: 'Hello', roomNos: 201, },
    { id: 9, hotelCode: 90, roomNo: 109, title: 'Dero ', price: 65, maxPeople: 8, desc: 'Hello', roomNos: 201,  },
  ];

const HotelList = () => {
  return (
    <>
    <div className="list">
        <Sidebar />

    <div className="listContainer">
        <NavBar />

        <div className="datatableTitle">
            <h2>My Hotel Listings</h2>
        </div>

        <div style={{
            position: "absolute",
            top: 60,
            right: 0,
            padding: "5px",
            fontSize: "18px",
            cursor: "pointer",
        }}>
            <Link to="/hotels/newHotel" style={{ textDecoration: "none" }}>
                <Button
                    variant="contained"
                    sx={{mt: 6, mr: 3 }}
                >Add New Hotel</Button>
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
  )
}

export default HotelList