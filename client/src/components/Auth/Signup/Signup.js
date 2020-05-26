import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import Copyright from "../Copyright";
import { signUp } from "../../../utils/firebaseFunctions";

import Box from "@material-ui/core/Box";

const SignUp = () => {
  const history = useHistory();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    occupation: "",
    location: "",
    about: "",
  });

  const incrementStep = () => setStep(step + 1);

  const decrementStep = () => setStep(step - 1);

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email,
      password,
      username,
      firstName,
      lastName,
      dateOfBirth,
      occupation,
      location,
      about,
    } = form;
    try {
      const res = await signUp(email, password);
      await axios.post("http://localhost:5000/users/new", {
        firebase_id: res.user.uid,
        email,
        username,
        first_name: firstName,
        last_name: lastName,
        date_of_birth: dateOfBirth,
        occupation,
        location,
        about,
      });
      history.push("/");
    } catch (err) {
      console.log("Error: ", err);
      alert(err);
    }
  };

  return (
    <>
      {step === 1 && (
        <UserDetails
          incrementStep={incrementStep}
          handleField={handleInput}
          form={form}></UserDetails>
      )}
      {step === 2 && (
        <PersonalDetails
          incrementStep={incrementStep}
          decrementStep={decrementStep}
          handleField={handleInput}
          form={form}></PersonalDetails>
      )}
      {step === 3 && (
        <Confirmation
          incrementStep={incrementStep}
          decrementStep={decrementStep}
          handleSubmit={handleSubmit}
          form={form}></Confirmation>
      )}
      {step === 4 && <Success></Success>}
      <Box mt={5}>
        <Copyright />
      </Box>
    </>
  );
};

export default SignUp;
