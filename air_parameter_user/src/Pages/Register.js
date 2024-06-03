import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  // State to keep track of whether the page has finished loading or not
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading delay with useEffect
  useEffect(() => {
    // Simulating a delay of 2 seconds before setting isLoading to false
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timeout if the component unmounts or when isLoading becomes false
    return () => clearTimeout(timeout);
  }, []);

  const [registrationData, setRegistrationData] = useState({
    username: "",
    email: "",
    phoneNo: "",
    password: "",
    role: "1",
  });
  const navigate = useNavigate();

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    console.log(registrationData);

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        registrationData
      );
      navigate("/login");
      console.log(response);
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      {/* Spinner Start */}
      {isLoading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner-grow text-primary" role="status" />
        </div>
      )}
      {/* Spinner End */}
      {/* Navbar Start */}
      <Header />
      {/* Navbar End */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>User Registration</title>
      {/* Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            body {\n                background-color: #f8f9fa;\n            }\n    \n            .container {\n                margin-top: 50px;\n            }\n        ",
        }}
      />
      <div className="container my-5 col-md-6">
        <h2>User Registration</h2>
        <form onSubmit={handleRegistrationSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  aria-describedby="emailHelp"
                  onChange={handleRegistrationChange}
                  value={registrationData.username}
                  placeholder="Enter your name.."
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  onChange={handleRegistrationChange}
                  value={registrationData.email}
                  placeholder="Enter your email.."
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  name="phoneNo"
                  className="form-control"
                  id="phone"
                  onChange={handleRegistrationChange}
                  value={registrationData.phoneNo}
                  placeholder="Enter your Phone.."
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Device ID:</label>
                <input
                  type="text"
                  name="deviceId"
                  className="form-control"
                  id="deviceId"
                  onChange={handleRegistrationChange}
                  value={registrationData.deviceId}
                  placeholder="Enter your Device ID.."
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Area:</label>
                <input
                  type="area"
                  name="area"
                  className="form-control"
                  id="area"
                  onChange={handleRegistrationChange}
                  value={registrationData.area}
                  placeholder="Enter your area.."
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleRegistrationChange}
                  value={registrationData.password}
                  placeholder="Enter your password.."
                  id="password"
                  required
                />
              </div>
            </div>
          </div>
          {/* <div className="form-group">
            <label htmlFor="Confirm Password"> Confirm Password:</label>
            <input
              type="password"
              name="upassword"
              className="form-control"
              placeholder="Enter your confirm password.."
              id="password"
              required
            />
          </div> */}
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          &nbsp;<a href="/login">Click here to login!</a>
        </form>
      </div>
    </div>
  );
}

export default Register;
