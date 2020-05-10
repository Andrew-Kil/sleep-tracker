export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://sleep-tracker.herokuapp.com";
};
