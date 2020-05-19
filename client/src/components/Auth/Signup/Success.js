import React from "react";

import { Dialog, AppBar } from "@material-ui/core";

const Success = () => {
  return (
    <>
      <Dialog open fullWidth center maxWidth="sm">
        <AppBar title="Success" />
        <h1>Thank you for signing up!</h1>
      </Dialog>
    </>
  );
};

export default Success;
