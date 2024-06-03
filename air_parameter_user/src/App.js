import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Complaint from "./Pages/Complaint";
import Devices from "./Pages/Devices";
import Feedback from "./Pages/Feedback";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useEffect, useState } from "react";
import checkSession from "./auth/authService";
import axios from "axios";
import SensorHistory from "./Pages/SensorHistory";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true); // New loading state

  axios.defaults.withCredentials = true;

  //for checking session
  useEffect(() => {
    const authenticateUser = async () => {
      // Call checkSession to determine if user is authenticated
      // const isAuthenticated = await checkSession();
      // setIsAuthenticated(isAuthenticated);
      // setLoading(false); // Set loading to false after checking session
      try {
        const isAuthenticated = await checkSession();
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Set loading to false after authentication check
      }
    };

    if (!isAuthenticated) {
      authenticateUser(); // Check session only if user is not authenticated
    } else {
      setLoading(false); // Set loading to false immediately if user is authenticated
    }
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/devices" element={<Devices />} />
        <Route
          path="/sensorHistory"
          element={
            isAuthenticated ? <SensorHistory /> : <Navigate to="/login" />
          }
        />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
