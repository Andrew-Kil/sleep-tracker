import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const DisplaySleepLogs = () => {
  const [sleepLogs, setSleepLogs] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios("http://localhost:5000/sleep-logs");
      setSleepLogs(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleDelete = (ID) => {
    axios
      .delete(`http://localhost:5000/sleep-logs/${ID}`)
      .catch((err) => console.error(err));
    window.location.reload(true);
  };

  return (
    <div>
      <h2>Sleep Logs</h2>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        sleepLogs &&
        sleepLogs.data.map((sleepLog, i) => (
          <div key={i}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center">
              <Grid item xs={6} style={{ minWidth: "75vw", margin: "25px" }}>
                <Paper elevation={3} className={classes.root} key={i}>
                  <Typography variant="h5" component="h3">
                    {sleepLog.post_date.slice(0, 10)}
                  </Typography>
                  <Typography component="p">
                    remember dream: {sleepLog.remember_dream ? "true" : "false"}
                  </Typography>
                  <Typography component="p">
                    interrupted sleep:{" "}
                    {sleepLog.interrupted_sleep ? "true" : "false"}
                  </Typography>
                  <Typography component="p">
                    sleep start: {sleepLog.sleep_start}
                  </Typography>
                  <Typography component="p">
                    sleep end:{sleepLog.sleep_end}
                  </Typography>
                  <Typography component="p">notes: {sleepLog.notes}</Typography>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(sleepLog.id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplaySleepLogs;
