import React, { useContext } from "react";

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
  Fab,
  Zoom,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { NavLink } from "react-router-dom";

import { logout } from "../../utils/firebaseFunctions";

import { UserContext } from "../../context/Store";

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
  const { userMeta } = useContext(UserContext);

  const handleLogout = (logout) => {
    logout();
    window.location.reload(true);
  };

  const renderNavLinks = () => {
    if (userMeta && userMeta.uid) {
      return (
        <>
          <Grid item xs>
            <Button>
              <NavLink
                to="/sleep-logs"
                style={{
                  textDecoration: "none",
                  color: "white",
                  textTransform: "capitalize",
                }}>
                <Typography variant="h6">Sleep Logs</Typography>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs>
            <Button>
              <NavLink
                to="/dream-themes"
                style={{
                  textDecoration: "none",
                  color: "white",
                  textTransform: "capitalize",
                }}>
                <Typography variant="h6">Dream Themes</Typography>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs>
            <Button>
              <NavLink
                to="/profile"
                style={{
                  textDecoration: "none",
                  color: "white",
                  textTransform: "capitalize",
                }}>
                <Typography variant="h6">Profile</Typography>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs>
            <Button onClick={() => handleLogout(logout)}>
              <Typography
                variant="h6"
                style={{
                  textDecoration: "none",
                  color: "white",
                  textTransform: "capitalize",
                }}>
                Log Out
              </Typography>
            </Button>
          </Grid>
        </>
      );
    } else {
      return (
        <>
          <Grid item xs>
            <Button>
              <NavLink
                to="/auth/login"
                style={{
                  textDecoration: "none",
                  color: "white",
                  textTransform: "capitalize",
                }}>
                <Typography variant="h6">Login</Typography>
              </NavLink>
            </Button>
          </Grid>
          <Grid item xs>
            <Button>
              <NavLink
                to="/auth/signup"
                style={{
                  textDecoration: "none",
                  color: "white",
                  textTransform: "capitalize",
                }}>
                <Typography variant="h6">Sign Up</Typography>
              </NavLink>
            </Button>
          </Grid>
        </>
      );
    }
  };

  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Grid container spacing={6}>
            <Grid item xs>
              <Button>
                <NavLink
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    textTransform: "capitalize",
                  }}>
                  <Typography variant="h6">Home</Typography>
                </NavLink>
              </Button>
            </Grid>
            {renderNavLinks()}
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
