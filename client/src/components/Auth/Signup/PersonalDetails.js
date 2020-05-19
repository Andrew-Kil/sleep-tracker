import React from "react";

import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PersonalDetails = ({
  form: { firstName, lastName, dateOfBirth, occupation, location, about },
  decrementStep,
  incrementStep,
  handleField,
}) => {
  const classes = useStyles();

  const prevStep = (e) => {
    e.preventDefault();
    decrementStep();
  };

  const nextStep = (e) => {
    e.preventDefault();
    incrementStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h5" variant="h5">
          Sign up
        </Typography>
        <Typography component="p" variant="p">
          Personal Details
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => handleField(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => handleField(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="dateOfBirth"
                label="Date of Birth"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => handleField(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="occupation"
                label="Occupation"
                name="occupation"
                value={occupation}
                onChange={(e) => handleField(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                value={location}
                onChange={(e) => handleField(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="about"
                label="About"
                name="about"
                value={about}
                onChange={(e) => handleField(e)}
              />
            </Grid>
          </Grid>
          <Button
            item
            xs={6}
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={(e) => prevStep(e)}
            style={{ marginRight: "20px" }}>
            Back
          </Button>
          <Button
            item
            xs={6}
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => nextStep(e)}
            style={{ marginLeft: "20px" }}>
            Next
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="/auth/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default PersonalDetails;
