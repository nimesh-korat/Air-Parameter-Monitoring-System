import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  // State to keep track of whether the page has finished loading or not
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading delay with useEffect
  useEffect(() => {
    // Simulating a delay of 2 seconds before setting isLoading to false
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clear the timeout if the component unmounts or when isLoading becomes false
    return () => clearTimeout(timeout);
  }, []);

  axios.defaults.withCredentials = true;

  //hook for Storing email & password
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "1",
  });

  //eslint-disable-next-line
  const [isLoaded, setLoaded] = useState(true);

  //getting textdata from input fields
  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    //storing textdata from input fields
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //callback function to FIRE login API
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setLoaded(false);
    //calling Login API
    try {
      await axios.post(
        "http://localhost:5000/login",
        loginData
      );
      setLoaded(true);
      window.location.reload(false);
    } catch (error) {
      console.log("Login Err: ", error);
      setLoaded(true);

      alert(error.response.data.message);
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
      <title>User Login</title>
      {/* Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        body {\n            background-color: #f8f9fa;\n        }\n\n        .container {\n            margin-top: 50px;\n        }\n    ",
        }}
      />
      <div className="container">
        <h2>User Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={loginData.email}
              onChange={handleLoginChange}
              placeholder="Enter you emaill.."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="form-control"
              placeholder="Enter you password.."
              id="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          &nbsp;<Link to="/signup">Create a new account?</Link>
        </form>
      </div>

    </div>
  );
}
export default Login;
