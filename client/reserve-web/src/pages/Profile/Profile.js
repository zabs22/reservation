import React from 'react';
import './Profile.css';

import Button from "@mui/material/Button"

export default function Profile() {
  return (
    <div class="main">
        <h2>Profile </h2>
        <div class="card">
            <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>Yabsira</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>yabs@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>:</td>
                            <td>091222345</td>
                        </tr>
                    </tbody>
                </table>

              <Button 
                variant="contained"
                sx={{ mt: 3, mb: 3, mr: 2, ml: 2 }}
              >Edit Info
              </Button>
            </div>
        </div>
  </div>
  );
}