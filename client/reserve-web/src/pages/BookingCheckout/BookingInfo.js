import React, {useEffect,useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useNavigate } from 'react-router-dom';

const BookingInfo = () => {

  const [auth,setauth]=useState('');
  const [User,setUser]=useState('');
  let navigate = useNavigate();

  useEffect(()=>{
    var auth = localStorage.getItem('Email');
    var User = localStorage.getItem('User');
if(auth===null){
  navigate('/login');
}
    setauth(auth);
    setUser(User); 
  })

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Booking Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
            variant="standard"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone_No"
            name="Phone_Number"
            label="Phone Number"
            fullWidth
            autoComplete="phone"
            variant="standard"
          />
        </Grid>
      
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this email for sending your order summary"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default BookingInfo;