import React, {useState} from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const NewBooking = () => {

    const defaultValues = {
      bookingId: "",
      hotelCode: "",
      ID: "",
      roomNo: "",
      checkIn: "",
      checkOut: "",
      numAdults: "",
      numChild: "",
      };

    const [formValues, setFormValues] = useState(defaultValues);
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
      };
  return (
    <>
    <div className='list'>
        <Sidebar />

    <div className='listContainer'>
        <Navbar />

        <div className="datatableTitle">
            <h2>Add New Booking Information</h2>
        </div>

        <form onSubmit={handleSubmit}>

        <Grid container 
            direction="column" 
            rowSpacing={2} 
            columnSpacing={{xs: 1, sm: 2, md: 3}}
            justifyContent="center"
            alignItems="start"
        >
          <Grid item xs={6} md={4}>
            <TextField
              id="bookingId"
              name="bookingId"
              label="Booking ID"
              type="number"
              value={formValues.bookingId}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TextField
              id="ID"
              name="ID"
              label="User ID"
              type="number"
              value={formValues.ID}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TextField
              id="hotelCode"
              name="hotelCode"
              label="Hotel Code"
              type="number"
              value={formValues.hotelCode}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TextField
              id="roomNo"
              name="roomNo"
              label="Room Number"
              type="number"
              value={formValues.roomNo}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TextField
              id="name-input"
              name="name"
              label="Name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4} md={4}>
            <TextField
              id="age-input"
              name="age"
              label="Age"
              type="number"
              value={formValues.age}
              onChange={handleInputChange}
            />
          </Grid>
          
          
          <Button variant="contained" color="primary" type="submit" sx={{mt: 6, mr: 3, ml: 4}}>
          Submit
        </Button>

        </Grid>
    </form>
    </div>
    </div>
    </>
  );
}

export default NewBooking;