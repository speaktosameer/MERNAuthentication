import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Tutor Bahadur
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {
  
  const classes = useStyles();
  const history =useHistory();
  const [user,setUser]=useState({
    fname:"",lname:"",email:"",phone:"",password:"",cpassword:"",prof:""

  });
  

  let name,value;
  const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
  }
  const handleChange = (event) => {
     setUser({...user, prof:event.target.value})
  };

    const PostData = async (e) => {
        e.preventDefault();

        const{fname,lname,email,phone,password,cpassword,prof} =user;

       const res = await fetch('/register', {
         method:"POST",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify({
          fname,lname,email,phone,password,cpassword,prof
         })
       });

       const data = await res.json();

       if(data.status === 422 || !data){
         window.alert("Invalid Registration");
         console.log("Invalid Registration");
       }
       else{
        window.alert("Successful Registration");
        console.log("Successful Registration");

        history.push('/login');
       }
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {/* <Typography component="h1" variant="h5">
          Signup as Student
        </Typography> */}
        <form method="POST" className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="fname"
                variant="outlined"
                required
                fullWidth
                id="fname"
                label="First Name"
                autoFocus
                value={user.fname}
                onChange={handleInputs}
                inputProps={{
                maxLength: 15}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
                value={user.lname}
                onChange={handleInputs}
                autoComplete="lname"
                inputProps={{
                maxLength: 15}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={user.email}
                onChange={handleInputs}
                label="Email Address"
                name="email"
                autoComplete="email"
                inputProps={{
                maxLength: 20}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                type="number"
                required
                fullWidth
                id="phone"
                value={user.phone}
                onChange={handleInputs}
                label="Phone Number"
                name="phone"
                autoComplete="number"
                onInput = {(e) =>{
                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={user.password}
                onChange={handleInputs}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{
                maxLength: 25}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                value={user.cpassword}
                onChange={handleInputs}
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="current-password"
                inputProps={{
                maxLength: 25}}
              />
            </Grid>
            <Grid item xs={12}>
        <FormControl variant="outlined" className={classes.formControl} style={{width:397}}>
        <InputLabel id="demo-simple-select-filled-label">Select Your Profesional </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={user.prof}
          onChange={handleChange}
          label="Profession"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
        </Select>
      </FormControl>
</Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={PostData}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={2}>
        <Copyright />
      </Box>
    </Container>
  );
}