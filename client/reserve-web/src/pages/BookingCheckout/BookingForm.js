import React from 'react'
import './BookingForm.css'

import Navbar from '../../components/navbar/Navbar'
import Button from '@mui/material/Button'

import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
    const navigate = useNavigate();

    const handleConfirm = () => {
        if(true) {
         navigate("/");
       }
     };

  return (
    <>
        <Navbar />
    <div className='roomForm'>
        <div className="roomBody">
        <form className='formSubmit'>

        <h1>Booking Form</h1>
      <div className='row'>
        <div className='column'>
          <label className='formLabel'>First Name:
            <input type="number" name="RoomNo" className='formInput'/>
          </label>
          <br/>

          <label className='formLabel'>Last Name:
          <input type="text" name="title" className='formInput' />
        </label>
        <br/>
        <label className='formLabel'>Phone Number:
          <input type="text" name="price" className='formInput'/>
        </label>
        <br/>
        <label className='formLabel'>Max people:
          <input type="number" name="maxpeople" className='formInput'/>
        </label>
        <br/>
        <label className='formLabel'>Email:
          <input type="text" name="disc" className='formInput'/>
        </label>
        <br/>
        <label className='formLabel'>Room Selected:
          <input type="number" name="roomNumbers" className='formInput'/>
        </label>
          </div>
        
        {/* Second Column*/}
      
      <div className='column'>
        <label className='formLabel'>Price per night:
          <input type="number" name="RoomNo" className='formInput'/>
        </label>
        <br/>
        <label className='formLabel'>title:
          <input type="text" name="title" className='formInput' />
        </label>
        <br/>
        
        </div>
        </div>
        <br/>

        <Button 
              variant="contained"
              sx={{ mt: 3, mb: 3, mr: 2, ml: 2 }}
              onClick={handleConfirm}>Confirm Booking</Button>
      </form>
    
      </div>
    </div>
    </>
  )
}

export default BookingForm