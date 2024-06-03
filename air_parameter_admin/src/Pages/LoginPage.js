import React from "react";
import axios from "axios";

function LoginPage() {
  axios.defaults.withCredentials = true;

  //storing login data from input fields
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
    role: "0",
  });

  //getting textdata from input fields
  const handleChange = async (e) => {
    const { name, value } = e.target;
    // storing textdata from input fields
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(loginData);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/login", loginData);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="dashboard-main-wrapper">
        <div className="card container shadow col-md-6 p-5 d-flex justify-content-center align-items-center">
          <div className="authincation-content">
            <div className="auth-form">
              <h4 className="text-center mb-4">SIGN IN</h4>
              <p className="text-center mb-4">
                Hello there, Sign in and start managing your Admin Panel
              </p>
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label>
                    <strong>Email</strong>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="hello@example.com"
                    value={loginData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <strong>Password</strong>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/***********************************
  Scripts
    ************************************/}
      {/* Required vendors */}
    </>
  );
}

export default LoginPage;
