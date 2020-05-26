import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { UserAuthContext } from "../../context/UserAuthProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const DisplaySleepLogs = () => {
  const { userMeta } = useContext(UserAuthContext);

  const userID = userMeta && userMeta.uid;

  const [sleepLogs, setSleepLogs] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  const convertISODate = (postDate) => {
    const date = postDate.substring(0, 10);
    const month = date.split("-")[1];
    const day = date.split("-")[2];
    const year = date.split("-")[0];
    return `${month}-${day}-${year}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `http://localhost:5000/sleep-logs/user/${userID}`
      );
      setSleepLogs(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [userID]);

  const handleDelete = (ID) => {
    axios
      .delete(`http://localhost:5000/sleep-logs/${ID}`)
      .catch((err) => console.error(err));
    window.location.reload(true);
  };

  return (
    <div>
      <h2>Your Sleep Logs</h2>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        sleepLogs &&
        sleepLogs.data
          .sort((a, b) => {
            const c = convertISODate(a.post_date);
            const d = convertISODate(b.post_date);
            return c < d ? 1 : c > d ? -1 : 0;
          })
          .map((sleepLog, i) => (
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
                    style={{ justifyContent: "left" }}>
                    <Typography variant="h5" component="h5">
                      {convertISODate(sleepLog.post_date)}
                    </Typography>
                    <Typography component="p">
                      Remember dream:{" "}
                      {sleepLog.remember_dream ? "true" : "false"}
                    </Typography>
                    <Typography component="p">
                      Sleep interrupted:{" "}
                      {sleepLog.interrupted_sleep ? "true" : "false"}
                    </Typography>
                    <Typography component="p">
                      Sleep start: {sleepLog.sleep_start}
                    </Typography>
                    <Typography component="p">
                      Sleep end:{sleepLog.sleep_end}
                    </Typography>
                    <Typography component="p">
                      Notes: {sleepLog.notes}
                    </Typography>
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
