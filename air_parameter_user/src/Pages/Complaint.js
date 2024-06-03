import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Complaint() {
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
  const navigate = useNavigate();
  const [complaintData, setComplaintData] = useState({
    userName: "",
    compDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaintData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/addComplaints",
        complaintData
      );
      if (response.data.success) {
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
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
      {/* Header Start */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">Complains</h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                  <li className="breadcrumb-item active" aria-current="page">
                    Complains
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
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-6">Complains</h1>
              <p className="text-primary fs-5 mb-0">User Complains</p>
            </div>
          </div>
          <div className="row g-5">
            <div
              className="col-lg-7 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="userName"
                        onChange={handleChange}
                        value={complaintData.userName}
                        placeholder="Your Name"
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        name="compDetails"
                        onChange={handleChange}
                        value={complaintData.compDetails}
                        required
                        style={{ height: 100 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-4" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* Footer End */}
      {/* Back to Top */}
      <a
        href="/#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </a>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </div>
  );
}

export default Complaint;
