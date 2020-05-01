import React, { useState } from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

const Form = () => {
  const [postDate, setPostDate] = useState(new Date());
  const [rememberDream, setRememberDream] = useState("");
  const [sleepInterrupted, setSleepInterrupted] = useState("");
  const [sleepStart, setSleepStart] = useState(new Date(0));
  const [sleepEnd, setSleepEnd] = useState(new Date(0));
  const [notes, setNotes] = useState("");

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    axios
      .post("http://localhost:5000/sleep-logs", {
        post_date: postDate.toISOString().slice(0, 10),
        remember_dream: rememberDream,
        sleep_interrupted: sleepInterrupted,
        sleep_start: `${sleepStart}`.split(" ")[4],
        sleep_end: `${sleepEnd}`.split(" ")[4],
        notes,
      })
      .then(() => alert("log submitted successfully!"))
      // use react-router to route user to sleep-logs
      .catch((err) => console.log(err));

    console.log(
      "post_date.toISOString().slice(0, 10)",
      postDate.toISOString().slice(0, 10)
    );
    console.log("rememberDream", rememberDream);
    console.log("sleepInterrupted", sleepInterrupted);
    console.log("sleepStart", `${sleepStart}`.split(" ")[4]);
    console.log("sleepEnd", `${sleepEnd}`.split(" ")[4]);
    console.log("notes", notes);
  };

  return (
    <main className={classes.layout}>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          padding: "20px",
        }}>
        <Typography variant="h6" gutterBottom>
          Sleep Log Form
        </Typography>
        <Grid container spacing={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12} sm={12}>
              <KeyboardDatePicker
                margin="normal"
                label="Date"
                format="MM/dd/yyyy"
                value={postDate}
                onChange={setPostDate}
                KeyboardButtonProps={{ "aria-label": "change date" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <KeyboardTimePicker
                required
                margin="normal"
                label="Sleep Start"
                value={sleepStart}
                onChange={setSleepStart}
                emptyLabel
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <KeyboardTimePicker
                required
                margin="normal"
                label="Sleep End"
                value={sleepEnd}
                onChange={setSleepEnd}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Grid item xs={12} sm={12}>
            <TextField
              id="notes"
              name="notes"
              label="Notes"
              aria-label="Add notes here"
              placeholder="Add notes here"
              multiline
              rows="5"
              fullWidth
              variant="outlined"
              onChange={(e) => setNotes(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Remember dream?</FormLabel>
              <RadioGroup
                aria-label="remember dream"
                name="remember dream"
                value={rememberDream}
                onChange={(e) => setRememberDream(e.target.value)}>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Sleep interrupted?</FormLabel>
              <RadioGroup
                aria-label="sleep interrupted"
                name="sleep interrupted"
                value={sleepInterrupted}
                onChange={(e) => setSleepInterrupted(e.target.value)}>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default Form;
