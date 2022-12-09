import React, { useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
  
  const theme = createTheme();

const Login = () => {
  // const userRef = userRef();
  // const errRef = errRef();

  // const [user, setuser] = useState('');
  //  const [pwd, setpwd] = useState('');
  //  const [errMsg, seterrMsg] = useState('');
  //  const [success, setsuccess] = useState(false);

  //  useEffect(() => {
  //   useRef.current.focus();
  //  },[])

  //  useEffect(() => {
  //   seterrMsg('');
  //  },[user,pwd])

  //  const handelsubmite = async (e) => {
  //   e.preventDefault();
  //   console.log(user,pwd)
    
  //   setsuccess(true);
  //  }


  let navigate = useNavigate();

  const [user,setuser]=useState({Email:'',Password:''})

  const handleChange=(e)=>{
    setuser({ ...user,[e.target.name]: e.target.value});
  }

  const submitForm=(e)=>{
    e.preventDefault();
   const sendData = {
    Email:user.Email,
    Password:user.Password
    }
  
  
  console.log(sendData)
  
  axios.post('http://localhost/api2/login_&_signup/logintest.php',{
    Email:user.Email,
    Password:user.Password})

  // .then((res)=> localStorage.setItem("token", res.data.token))
  // .catch((err)=> console.error(err));
  // navigate('/');

  .then((response)=>{
    console.log(response)
    if (response === !null) {
      console.log("true")
      navigate('/');
    }
  })

  .catch((error)=>{
    console.error("ERROR FOUND" +error);
  })
 
  // .then((response)=>{
  //   console.log(response.data.Message)
  //   if (response.data.Message === "Success") {
  //     console.log("true")
  //     navigate('/');
  //   }
  //   console.log(sendData);
  
  // })

  // .catch((error)=>{
  //   console.error("ERROR FOUND" +error);
  // })
 
  // fetch("http://localhost/api2/login_&_signup/login_clinet.php")
 
  // .then((result)=>{
  //   if(result.data.Status === '200'){
  //     window.localStorage.setItem('Email', result.data.Email);
  //     window.localStorage.setItem('Username', result.data.Username);
  //   navigate('/');
  //     }
  //   else{
  //     alert('Invalid User');
  //   }
  // })
  
   }

  //  const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  //  };
  return (
      
    <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={submitForm} method="post" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email"
              // ref={userRef}
              label="Email Address"
              name="Email"
              autoComplete="email"
              autoFocus
              onChange={handleChange} value={user.Email}
              // onChange={(e) => setuser(e.target.value)}
              // value={user}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Password"
              type="Password"
              id="Password"
              autoComplete="current-password"
              onChange={handleChange} value={user.Password}
              // onChange={(e) => setpwd(e.target.value)}
              // value={pwd}
             
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="./SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
