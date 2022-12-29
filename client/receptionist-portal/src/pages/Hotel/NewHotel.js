import React, {useState} from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const NewHotel = () => {
    
    const defaultValues = {
        hotelCode: "",
        roomNo: "",
        title: "",
        price: "",
        maxPeople: "",
        desc: "",
        roomNos: "",
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
            <h2>Add New Hotel and Room Information</h2>
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
              id="title"
              name="title"
              label="Hotel Title"
              type="text"
              value={formValues.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4} md={4}>
            <TextField
              id="price"
              name="price"
              label="Price for Room"
              type="number"
              value={formValues.price}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4} md={4}>
            <TextField
              id="maxPeople"
              name="maxPeople"
              label="Max No of People"
              type="number"
              value={formValues.maxPeople}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4} md={4}>
            <TextField
              id="desc"
              name="desc"
              label="Description of Room"
              type="text"
              value={formValues.desc}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4} md={4}>
            <TextField
              id="roomNos"
              name="roomNos"
              label="Room Numbers"
              type="number"
              value={formValues.roomNos}
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
  )
}

export default NewHotel