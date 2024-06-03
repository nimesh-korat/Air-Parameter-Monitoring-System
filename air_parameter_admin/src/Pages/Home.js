import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="dashboard-main-wrapper">
        <Header />
        <Sidebar />
        <div className="dashboard-wrapper">
          <div className="dashboard-ecommerce">
            <div className="container-fluid dashboard-content">
              <div className="ecommerce-widget">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <Link className="nav-link text-muted" to="/users.html">
                          <h2> User Details</h2>
                        </Link>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa fa-users fa-1x text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <Link
                          className="nav-link text-muted"
                          to="/deviceLocation.html"
                        >
                          <h2>Device Location</h2>
                        </Link>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa fa-map fa-1x text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <Link
                          className="nav-link text-muted"
                          to="/temprature.html"
                        >
                          <h2>Tempareture Sensor Data</h2>
                        </Link>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa fa-temperature-high fa-1x text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <Link className="nav-link text-muted" to="/smoke.html">
                          <h2>Smoke Sensor Data</h2>
                        </Link>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa fa-smog fa-1x text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <Link className="nav-link text-muted" to="/mq135.html">
                          <h2>MQ135 Sensor Data</h2>
                        </Link>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa fa-microchip fa-1x text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <Link className="nav-link text-muted" to="/mq3.html">
                          <h2>MQ3 Sensor Data</h2>
                        </Link>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa fa-microchip fa-1x text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <Link className="nav-link text-muted" to="/fire.html">
                          <h2>Fire Sensor Data</h2>
                        </Link>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa fa-fire fa-1x text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <Link
                          className="nav-link text-muted"
                          to="/mqToxicGas.html"
                        >
                          <h2>MQ Toxic Gas Sensor</h2>
                        </Link>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa fa-gas-pump fa-1x text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <h2 className="text-muted">Alerts Data</h2>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa fa-bell fa-1x text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <h2 className="text-muted">Complains Data</h2>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa fa-envelope fa-1x text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <h2 className="text-muted">Feedback Data</h2>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="icon">
                            <i className="fa fa-thumbs-up fa-1x text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
