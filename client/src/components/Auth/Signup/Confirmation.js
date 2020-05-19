import React from "react";
import {
  Dialog,
  AppBar,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core/";

const Confirmation = ({
  form: {
    email,
    firstName,
    lastName,
    dateOfBirth,
    occupation,
    location,
    about,
  },
  decrementStep,
  incrementStep,
  handleSubmit,
}) => {
  const prevStep = (e) => {
    e.preventDefault();
    decrementStep();
  };

  const submitForm = (e) => {
    e.preventDefault();
    incrementStep();
    handleSubmit(e);
  };

  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Confirm User Data" />
        <List>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Date of Birth" secondary={dateOfBirth} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Location" secondary={location} />
          </ListItem>
          <ListItem>
            <ListItemText primary="About" secondary={about} />
          </ListItem>
        </List>
        <div>
          <Button
            color="secondary"
            variant="contained"
            style={{ width: "50%", borderRadius: "0px" }}
            onClick={(e) => prevStep(e)}>
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={{ width: "50%", borderRadius: "0px" }}
            onClick={(e) => submitForm(e)}>
            Confirm
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default Confirmation;
