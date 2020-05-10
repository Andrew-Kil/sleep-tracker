import React from "react";

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
  Fab,
  Zoom,
  Paper,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { NavLink } from "react-router-dom";

import { logout } from "../../utils/firebaseFunctions";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ScrollTop = (props) => {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <div style={{ marginBottom: "50px" }}>
      <AppBar color="secondary">
        <Toolbar>
          <Grid container spacing={6}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <Typography variant="h6">Home</Typography>
                </NavLink>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <NavLink to="/sleep-logs" style={{ textDecoration: "none" }}>
                  <Typography variant="h6">Sleep Logs</Typography>
                </NavLink>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <NavLink to="/dream-themes" style={{ textDecoration: "none" }}>
                  <Typography variant="h6">Dream Themes</Typography>
                </NavLink>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <NavLink to="/auth/login" style={{ textDecoration: "none" }}>
                  <Typography variant="h6">Login</Typography>
                </NavLink>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <NavLink to="/auth/signup" style={{ textDecoration: "none" }}>
                  <Typography variant="h6">Signup</Typography>
                </NavLink>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Button onClick={logout}>Log Out</Button>
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default NavBar;
