import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2HgM_kc7t-sptWAlCBvBbkUfGhbxFNdc",
  authDomain: "sleep-app-968d3.firebaseapp.com",
  databaseURL: "https://sleep-app-968d3.firebaseio.com",
  projectId: "sleep-app-968d3",
  storageBucket: "sleep-app-968d3.appspot.com",
  messagingSenderId: "186760903531",
  appId: "1:186760903531:web:8a37ed9a5cbe36016b6a2e",
  measurementId: "G-T92T374MLB",
};

app.initializeApp(firebaseConfig);

export default app;
