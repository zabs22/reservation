import React, { useState} from 'react'
import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';

const New = () => {
    const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add here</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <Box
                sx={{
                  marginTop: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
        >
        
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                id="Email"
                label="Email"
                name="Email"
                autoComplete="current-Email"
                autoFocus
              />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="Password"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="City"
                  name="City"
                  required
                  fullWidth
                  id="City"
                  label="City"
                  autoFocus
                />
              </Grid>

            {/* Sign In Button*/}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
            </Grid>
          </Box>
          </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New