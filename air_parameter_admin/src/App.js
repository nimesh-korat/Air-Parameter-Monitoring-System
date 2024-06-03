import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import TempratureSensor from "./Pages/TempratureSensor";
import SmokeSensor from "./Pages/SmokeSensor";
import MQ135Sensor from "./Pages/MQ135Sensor";
import MQ3Sensor from "./Pages/MQ3Sensor";
import FireSensor from "./Pages/FireSensor";
import MQToxicGasSensor from "./Pages/MQToxicGasSensor";
import Users from "./Pages/Users";
import DeviceLocation from "./Pages/DeviceLocation";
import ComplainsData from "./Pages/ComplainsData";
import FeedbackData from "./Pages/FeedbackData";
import AlertData from "./Pages/AlertData";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import axios from "axios";
import checkSession from "./auth/authServices"; // Import the checkSession function
import { useEffect, useState } from "react";

function App() {
  axios.defaults.withCredentials = true;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login.html" />}
          />
          <Route
            path="/login.html"
            element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/register.html"
            element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/" />}
          />

          <Route
            path="/temprature.html"
            element={
              isAuthenticated ? (
                <TempratureSensor />
              ) : (
                <Navigate to="/login.html" />
              )
            }
          />
          <Route
            path="/smoke.html"
            element={
              isAuthenticated ? <SmokeSensor /> : <Navigate to="/login.html" />
            }
          />
          <Route
            path="/mq135.html"
            element={
              isAuthenticated ? <MQ135Sensor /> : <Navigate to="/login.html" />
            }
          />
          <Route
            path="/mq3.html"
            element={
              isAuthenticated ? <MQ3Sensor /> : <Navigate to="/login.html" />
            }
          />
          <Route
            path="/fire.html"
            element={
              isAuthenticated ? <FireSensor /> : <Navigate to="/login.html" />
            }
          />
          <Route
            path="/mqToxicGas.html"
            element={
              isAuthenticated ? (
                <MQToxicGasSensor />
              ) : (
                <Navigate to="/login.html" />
              )
            }
          />
          <Route
            path="/users.html"
            element={
              isAuthenticated ? <Users /> : <Navigate to="/login.html" />
            }
          />
          <Route
            path="/deviceLocation.html"
            element={
              isAuthenticated ? (
                <DeviceLocation />
              ) : (
                <Navigate to="/login.html" />
              )
            }
          />
          <Route
            path="/complainsData.html"
            element={
              isAuthenticated ? (
                <ComplainsData />
              ) : (
                <Navigate to="/login.html" />
              )
            }
          />
          <Route
            path="/feedbackData.html"
            element={
              isAuthenticated ? <FeedbackData /> : <Navigate to="/login.html" />
            }
          />
          <Route
            path="/alertData.html"
            element={
              isAuthenticated ? <AlertData /> : <Navigate to="/login.html" />
            }
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
