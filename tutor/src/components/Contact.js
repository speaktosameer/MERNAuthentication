import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Link from '@material-ui/core/Link';
import BusinessIcon from '@material-ui/icons/Business';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Tutor Bahadur
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
  },
  paper: {
    margin: theme.spacing(4, 1),
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
    marginTop: theme.spacing(1),
  },
  heroContent: {
    padding: theme.spacing(11, 0, 8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(1),
  },
  cardsize:{
      marginTop:'5vh',
  },
}));
const tiers = [
   
    {
      title: 'Email',
      description: [
        'tutorbahadur @gmail.com',
        
      ],
      buttonText: 'Get started',
      buttonVariant: 'outlined',
    },
    {
        title: 'Phone',
        description: ['9856321478', ],
        buttonText: 'Call Me',
        buttonVariant: 'contained',
      },
    {
      title: 'Address',
      price: '30',
      description: [
        'Jamal Kathmandu',
        
      ],
      buttonText: 'View on Map',
      buttonVariant: 'outlined',
    },
  ];
 
  
export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      <Grid item xs={false} sm={4} md={7}>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          <h1>Connect with Us</h1>
        </Typography>



        <Grid container spacing={4} alignItems="flex-end" className={classes.cardsize}>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Phone' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                //   subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                  action={tier.title === 'Phone' ? <PhoneInTalkRoundedIcon/> : tier.title === 'Email' ? <AlternateEmailIcon/> : <BusinessIcon/> }
                />
                <CardContent>
                    <div className={classes.cardPricing}>
                        
                    {/* <ul> */}
                    {tier.description.map((line) => (
                      <Typography component="h1" variant="subtitle1" align="center" key={line}>
                        <h5>{line}</h5>
                      </Typography>
                    ))}
                  {/* </ul> */}
                    </div>
                  
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
                
              </Card>
            </Grid>
          ))}
        </Grid>




      </Container>
      </Grid>
      <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <h1>Get In Touch</h1>
      {/* <Typography component="h1" variant="h5">
        Signup as Student
      </Typography> */}
      <form className={classes.form}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                inputProps={{
                maxLength: 15}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
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
                required
                fullWidth
                name="password"
                label="Mesages"
                type="password"
                id="password"
                multiline
                rows={4}
                rowsMax={4}
                autoComplete="current-password"
                inputProps={{
                maxLength: 1000}}
              />
            </Grid>
        
      </Grid>
      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send Message
          </Button>
    </form>
    </div>
    <Box mt={2}>
        <Copyright />
      </Box>
    </Container>
      </Grid>
  );
}