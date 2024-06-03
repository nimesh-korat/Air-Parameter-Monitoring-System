import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function About() {
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
      {/* Header Start */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">About Us</h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li class="breadcrumb-item"><Link to="#">Pages</Link></li> */}
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <img
                className="img-fluid animated pulse infinite"
                style={{ animationDuration: "3s" }}
                src="https://img.freepik.com/premium-photo/air-pollution-presence-harmful-substances-air-industrial-processes-by-generative-ai_669646-1553.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img
                className="img-fluid"
                src="https://img.freepik.com/premium-photo/air-pollution-presence-harmful-substances-air-industrial-processes-by-generative-ai_669646-1553.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6">About Us</h1>
                <p className="text-primary fs-5 mb-4">
                  The Most Trusted Pollution Control Platform
                </p>
                <p>
                  Air pollution control measures help preserve ecosystems,
                  protect biodiversity, and mitigate the impacts of acid rain,
                  smog, and ozone depletion.
                </p>
                <p className="mb-4">
                  Reducing air pollution can decrease the incidence of
                  respiratory diseases, cardiovascular problems, and other
                  health issues associated with exposure to pollutants.
                </p>
                <p>
                  While initial investments may be required, air pollution
                  control can lead to long-term cost savings through improved
                  public health, increased productivity, and reduced healthcare
                  expenditures.
                </p>
                <p>
                  An air pollution monitoring system is a comprehensive network
                  of instruments and sensors designed to monitor and analyze the
                  quality of the air in a specific area. These systems are vital
                  for assessing air pollution levels, identifying sources of
                  pollution, and implementing measures to protect public health
                  and the environment.
                </p>
                <p>
                  Measure concentrations of pollutants such as particulate
                  matter (PM), nitrogen dioxide (NO2), sulfur dioxide (SO2),
                  carbon monoxide (CO), ozone (O3), and volatile organic
                  compounds (VOCs).{" "}
                </p>
                <p>
                  Continuously monitors air quality and meteorological
                  parameters in real-time.
                </p>
                <p>
                  Air pollution monitoring systems play a crucial role in
                  safeguarding public health, promoting environmental
                  sustainability, and guiding decision-making processes related
                  to air quality management. Continuous advancements in sensor
                  technology, data analytics, and communication infrastructure
                  enhance the capabilities and effectiveness of these systems in
                  addressing air pollution challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
      {/* Back to Top */}
      <Link
        to="/#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </Link>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </div>
  );
}

export default About;
