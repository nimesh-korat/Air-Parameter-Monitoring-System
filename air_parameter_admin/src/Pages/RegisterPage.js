import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      <div className="authincation h-100">
        <div className="container-fluid h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form">
                      <h4 className="text-center mb-4">SIGN UP</h4>
                      <p className="text-center mb-4">
                        Hello there, Sign up and Join with Us
                      </p>
                      <form action="/">
                        <div className="form-group">
                          <label>
                            <strong>Username</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            <strong>Email</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="hello@example.com"
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            <strong>Password</strong>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <div className="text-center mt-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Sign up
                          </button>
                        </div>
                      </form>
                      <div className="new-account mt-3">
                        <p>
                          Already have an account?{" "}
                          <Link className="text-primary" to="/page-login.html">
                            Sign in
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/***********************************
  Scripts
    ************************************/}
      {/* Required vendors */}
      {/*endRemoveIf(production)*/}
    </>
  );
}

export default RegisterPage;
