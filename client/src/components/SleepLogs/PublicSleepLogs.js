import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { convertISODate } from "../../utils/helpers";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const PublicSleepLogs = () => {
  const classes = useStyles();
  const history = useHistory();
  const [publicSleepLogs, setPublicSleepLogs] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios("http://localhost:5000/sleep-logs/public");
      setPublicSleepLogs(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Public Sleep Logs</h2>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginBottom: "50px" }}
        onClick={() => history.push("/sleep-logs")}>
        Go Back
      </Button>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        publicSleepLogs &&
        publicSleepLogs.data
          .sort((a, b) => {
            const c = convertISODate(a.post_date);
            const d = convertISODate(b.post_date);
            return c < d ? 1 : c > d ? -1 : 0;
          })
          .map((publicSleepLog, i) => (
            <div key={i}>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                <Grid item xs={6} style={{ minWidth: "75vw", margin: "25px" }}>
                  <Paper
                    elevation={3}
                    className={classes.root}
                    key={i}
                    align="left">
                    <Typography variant="h5" component="h3">
                      {publicSleepLog.post_date.slice(0, 10)}
                    </Typography>
                    <Typography component="p">
                      Username:{" "}
                      <NavLink to={`/profile/${publicSleepLog.firebase_id}`}>
                        {publicSleepLog.username}
                      </NavLink>
                    </Typography>
                    <Typography component="p">
                      First Name: {publicSleepLog.first_name}
                    </Typography>
                    <Typography component="p">
                      Last Name: {publicSleepLog.last_name}
                    </Typography>
                    <Typography component="p">
                      Remember Dream:{" "}
                      {publicSleepLog.remember_dream ? "true" : "false"}
                    </Typography>
                    <Typography component="p">
                      Interrupted Sleep:{" "}
                      {publicSleepLog.interrupted_sleep ? "true" : "false"}
                    </Typography>
                    <Typography component="p">
                      Sleep Start: {publicSleepLog.sleep_start}
                    </Typography>
                    <Typography component="p">
                      Sleep End:{publicSleepLog.sleep_end}
                    </Typography>
                    <Typography component="p">
                      Notes: {publicSleepLog.notes}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          ))
      )}
    </div>
  );
};

export default PublicSleepLogs;
