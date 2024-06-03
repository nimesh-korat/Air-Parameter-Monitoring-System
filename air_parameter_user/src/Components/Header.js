import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import checkSession from "../auth/authService";

function Header() {
  //eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await checkSession();
      setIsLoggedIn(loggedIn);
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  const logout = async (e) => {
    try {
      await axios.get("http://localhost:5000/logout");
      window.location.reload(false);
    } catch (error) {
      console.log(" Error: ", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
      <Link to="index.html" className="navbar-brand d-flex align-items-center">
        <h2 className="m-0 text-primary">Pollotion Control</h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-4 py-lg-0">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/devices" className="nav-item nav-link">
            Devices
          </Link>
          {isLoggedIn ? (
            <Link to="/sensorHistory" className="nav-item nav-link">
              History
            </Link>
          ) : null}

          <Link to="/feedback" className="nav-item nav-link">
            Feedback
          </Link>
          <Link to="/complaint" className="nav-item nav-link">
            Complains
          </Link>
          {isLoggedIn ? (
            <Link
              onClick={() => logout()}
              to="/login"
              className="nav-item nav-link"
            >
              {" "}
              Logout{" "}
            </Link>
          ) : (
            <Link to="/login" className="nav-item nav-link">
              Login
            </Link>
          )}
        </div>
        {/* <Link to="/contact" className="nav-item nav-link">
          Contact
        </Link> */}
      </div>
    </nav>
  );
}

export default Header;
