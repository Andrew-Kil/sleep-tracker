import React, { useState, useEffect } from "react";

const AddSleepLogForm = () => {
  const INITIAL_STATE = { notes: "" };

  const [values, setValues] = useState(INITIAL_STATE);

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => console.log(values));

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="notes"
        placeholder="Add notes here"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddSleepLogForm;
