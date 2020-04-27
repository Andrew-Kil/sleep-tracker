import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import SleepLogForm from "./SleepLogForm";

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
  const classes = useStyles();
  return (
    <>
      <main className={classes.layout}>
        <SleepLogForm />
      </main>
    </>
  );
};

export default Form;
