import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: 275,
    height: 150,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
  },
});

const DisplaySleepLogs = () => {
  const [dreamThemes, setDreamThemes] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios("http://localhost:5000/dream-themes");
      setDreamThemes(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Dream Themes</h2>
      <Grid container alignItems="center" justify="center" spacing={10}>
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          dreamThemes &&
          dreamThemes.data.map((dreamTheme, i) => (
            <Grid item md={3} style={{ margin: "10px" }} key={i}>
              <Card className={classes.card} m={4}>
                <Typography className={classes.title} gutterBottom>
                  Theme: {dreamTheme.theme}
                </Typography>
                <Typography className={classes.pos} variant="body2">
                  Info: {dreamTheme.info}
                </Typography>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default DisplaySleepLogs;
