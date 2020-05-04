import React from "react";
import { withRouter } from "react-router";

// import { makeStyles } from "@material-ui/core/styles";
// import { Grid, Typography, TextField, Button } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   layout: {
//     width: "auto",
//     marginLeft: theme.spacing(2),
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
//       width: 600,
//       marginLeft: "auto",
//       marginRight: "auto",
//     },
//   },
// }));

const Form = ({
  match,
  username,
  password,
  isLoggedIn,
  loginUser,
  registerUser,
  handleUsernameChange,
  handlePasswordChange,
}) => {
  // const classes = useStyles();

  const path = match.path;

  // return (
  //     <main className={classes.layout}>
  //       <div
  //         style={{
  //           border: "2px solid black",
  //           borderRadius: "10px",
  //           padding: "20px",
  //         }}>
  //         <Typography variant="h6" gutterBottom>
  //           Login
  //         </Typography>
  //         <Grid container spacing={3}>
  //           <Grid item xs={12} sm={12}>
  //             <TextField
  //               required
  //               id="email"
  //               name="email"
  //               label="Email Address"
  //               aria-label="email address"
  //               placeholder="Email Address"
  //               multiline
  //               fullWidth
  //               variant="outlined"
  //               onChange={(e) => setEmail(e.target.value)}
  //             />
  //           </Grid>
  //           <Grid item xs={12} sm={12}>
  //             <TextField
  //               required
  //               id="password"
  //               name="password"
  //               label="Password"
  //               aria-label="password"
  //               placeholder="Password"
  //               multiline
  //               fullWidth
  //               variant="outlined"
  //               onChange={(e) => setPassword(e.target.value)}
  //             />
  //           </Grid>
  //           <Grid item xs={12} sm={12}>
  //             <Button variant="contained" color="primary" onClick={handleSubmit}>
  //               Log In
  //             </Button>
  //           </Grid>
  //         </Grid>
  //       </div>
  //     </main>

  return (
    <>
      <h1> {path === "/auth/login" ? "Login" : "Register"} </h1>
      <form onSubmit={path === "/auth/login" ? loginUser : registerUser}>
        <input
          type="text"
          value={username}
          name="username"
          placeholder="username"
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          value={password}
          name="password"
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{isLoggedIn ? "Logged In!" : ""}</p>
    </>
  );
};

export default withRouter(Form);
