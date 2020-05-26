import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import CardActions from "@material-ui/core/CardActions";
// import Button from "@material-ui/core/Button";
// import EditIcon from "@material-ui/icons/Edit";

import { UserAuthContext } from "../../context/UserAuthProvider";
import { convertISODate } from "../../utils/helpers";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Profile = ({ match }) => {
  const classes = useStyles();
  const { userMeta } = useContext(UserAuthContext);
  const userID = userMeta && userMeta.uid;
  const [profileInfo, setProfileInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (userID) {
        const result = await axios(
          `http://localhost:5000/users/profile/${userID}`
        );
        setProfileInfo(result.data.data[0]);
        setIsLoading(false);
      }
      if (match.params.id) {
        const result = await axios(
          `http://localhost:5000/users/profile/${match.params.id}`
        );
        setProfileInfo(result.data.data[0]);
        setIsLoading(false);
      }
    };
    if (userID || match.params.id) {
      fetchData();
    }
  }, [userID, match.params.id]);

  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        profileInfo && (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "50vh" }}>
            <Grid item xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent align="left">
                    <Typography variant="h6" color="textPrimary" component="h6">
                      Profile
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      <b>First Name: </b>
                      {profileInfo.first_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      <b>Last Name: </b>
                      {profileInfo.last_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      <b>Email: </b>
                      {profileInfo.email}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      <b>Date of Birth: </b>
                      {convertISODate(profileInfo.date_of_birth)}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      <b>Location: </b>
                      {profileInfo.location}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      <b>Occupation: </b>
                      {profileInfo.occupation}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    <EditIcon></EditIcon>
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          </Grid>
        )
      )}
    </>
  );
};

export default Profile;
