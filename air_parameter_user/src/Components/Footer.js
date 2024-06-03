import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="container-fluid bg-light footer mt-2 pt-2 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <h1 className="text-primary mb-4">Pollution Control</h1>
          </div>

          <div className="col-lg-3 col-md-6">
            {/* <h5 class="mb-4">Quick Links</h5> */}
            <Link
              className="btn btn-link"
              to="/about"
              style={{ textDecoration: "none" }}
            >
              About Us
            </Link>
            <hr />
            <Link
              className="btn btn-link"
              to="/feedback"
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </Link>
            <hr />
            <Link
              className="btn btn-link"
              to="/devices"
              style={{ textDecoration: "none" }}
            >
              Our Devices
            </Link>
            <hr />
            {/* <Link class="btn btn-link" href="">Terms & Condition</Link> */}
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © <Link href="#">Your Site Name</Link>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <Link href="https://htmlcodex.com">HTML Codex</Link>{" "}
              Distributed By <Link href="https://themewagon.com">ThemeWagon</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
