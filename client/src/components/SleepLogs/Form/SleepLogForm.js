import React from "react";

import { Grid, Typography, TextField, Button } from "@material-ui/core";

const SleepLogForm = () => (
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
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="sleepStart"
          name="sleepStart"
          label="Sleep Start"
          type="time"
          defaultValue="22:30"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="sleepEnd"
          name="sleepEnd"
          label="Sleep End"
          type="time"
          defaultValue="07:15"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
        />
      </Grid>
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
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          color="primary"
          // onClick={handleClick}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  </div>
);

export default SleepLogForm;
