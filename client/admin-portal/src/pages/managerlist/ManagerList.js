import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import NavBar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import './managerList.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  {
    field: 'managerName',
    headerName: 'Manager name',
    width: 150,
    editable: false, //if changed to true, you can edit by double clicking
  },
  {
    field: 'hotelName',
    headerName: 'Hotel name',
    width: 150,
    editable: false, //if changed to true, you can edit by double clicking
  },
  {
    field: 'email',
    headerName: 'Manager Email',
    type: 'email',
    width: 220,
    editable: false, //if changed to true, you can edit by double clicking
  },
];

const rows = [
  { id: 1, hotelName: 'Capital', managerName: 'Jon', email: "jonsnow@gmail.com"},
  { id: 2, hotelName: 'Harmony', managerName: 'Cersei', email: "cerseilannister@gmail.com"},
  { id: 3, hotelName: 'Sheraton', managerName: 'Jaime', email: "jamielannister@gmail.com"},
  { id: 4, hotelName: 'Hilton', managerName: 'Arya', email: "aryastark@gmail.com"},
  { id: 5, hotelName: 'Ghion', managerName: 'Daenerys', email: "Targaryan@gmail.com"},
  { id: 6, hotelName: 'Washington', managerName: null, email: "melissandre@gmail.com"},
  { id: 7, hotelName: 'Addis', managerName: 'Ferrara', email: "cliffordfererraw@gmail.com"},
  { id: 8, hotelName: 'Hello', managerName: 'Rossini', email: "francesrossini@gmail.com"},
  { id: 9, hotelName: 'Dero ', managerName: 'Harvey', email: "roxieharvey@gmail.com" },
];

export default function ManagerList() {
    const [data, setData] = useState("");

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

     const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div style={{
                display: "flex",
                alignItems: "center",
                margin: '10px',
                rowGap: "18px",
                justifyContent: 'space-evenly'
              }}>
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                    <Button 
                    variant="contained"
                    sx={{ mt: 3, mb: 3, mr: 2 }}
                    >View</Button>
                </Link>
                
                <Button 
                    onClick={() => handleDelete(params.row.id)}
                    variant="contained"
                    sx={{ mt: 3, mb: 3, mr: 2 }}
                    >Delete</Button>
                  
              </div>
            );
          },
        },
      ];
  return (
    <>
    <div className="list">
        <Sidebar />

    <div className="listContainer">
        <NavBar />
        
        <div className="datatableTitle">
            <h2>List of Managers running a hotel</h2>
        </div>

        <div style={{
            position: "absolute",
            top: 60,
            right: 0,
            padding: "5px",
            fontSize: "18px",
            cursor: "pointer",
        }}>
            <Link to="/managers/newmanager" style={{ textDecoration: "none" }}>
                <Button
                    variant="contained"
                    sx={{mt: 6, mr: 3 }}
                >Add New Manager</Button>
            </Link>
        </div>

        <Box sx={{ height: 400, width: '100%', ml: 2, mt: 2 }}>
        <DataGrid
            rows={rows}
            columns={columns.concat(actionColumn)}
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