import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
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
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">
                Air Parameter Monitoring System
              </h1>
              <p className="animated slideInDown">
                Air pollution monitoring plays a crucial role in assessing air
                quality, identifying pollution sources, protecting public
                health, and informing policy decisions aimed at mitigating
                pollution and improving environmental quality.
              </p>
              {/* <Link href="" class="btn btn-primary py-3 px-4 animated slideInDown">Explore More</Link> */}
            </div>
            <div className="col-lg-6 animated fadeIn">
              <img
                className="img-fluid animated pulse infinite"
                style={{ animationDuration: "3s" }}
                src="https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                  public health, increased productivity, and reduced
                  healthcare expenditures.
                </p>

                <Link className="btn btn-primary py-3 px-4" to="/about">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Start */}
      <div className="container-xxl bg-light py-5 my-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <h1 className="display-6"> Sensor Services</h1>
            <p className="text-primary fs-5 mb-5">All Information of Sensor</p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white p-5">
                <img
                  className="img-fluid mb-4"
                  style={{ width: 250, height: 250 }}
                  src="https://5.imimg.com/data5/JB/SG/ER/SELLER-38701987/temperature-sensor-500x500.jpg"
                  alt=""
                />
                <h5 className="mb-3">Tempareture Sensor</h5>
                <p>
                  Temperature sensors are devices used to measure the
                  temperature of an object or environment accurately. They are
                  widely employed in various fields, including industrial,
                  automotive, medical, and consumer electronics.{" "}
                </p>
                {/* <Link href="">Read More <i class="fa fa-arrow-right ms-2"></i></Link> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-white p-5">
                <img
                  style={{ width: 250, height: 250 }}
                  className="img-fluid mb-4"
                  src="https://m.media-amazon.com/images/I/31YWXNCD0IL.jpg"
                  alt=""
                />
                <h5 className="mb-3">Smoke Sensor</h5>
                <p>
                  Smoke sensors, also known as smoke detectors, are devices
                  designed to detect the presence of smoke particles in the air.
                  They are essential components of fire detection and alarm
                  systems, serving to alert occupants and initiate appropriate
                  responses in the event of a fire.{" "}
                </p>
                {/* <Link href="">Read More <i class="fa fa-arrow-right ms-2"></i></Link> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-white p-5">
                <img
                  style={{ width: 250, height: 250 }}
                  className="img-fluid mb-4"
                  src="https://m.media-amazon.com/images/I/41KudPrwdTL.jpg"
                  alt=""
                />
                <h5 className="mb-3">MQ135 Sensor</h5>
                <p>
                  The MQ-135 sensor is a popular gas sensor widely used for
                  detecting a variety of gases, particularly harmful gases such
                  as ammonia, nitrogen oxides, benzene, and carbon dioxide.{" "}
                </p>
                {/* <Link href="">Read More <i class="fa fa-arrow-right ms-2"></i></Link> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white p-5">
                <img
                  style={{ width: 250, height: 250 }}
                  className="img-fluid mb-4"
                  src="https://www.electronicscomp.com/image/cache/catalog/mq-3-alcohol-gas-sensor-module_india-800x800.jpg"
                  alt=""
                />
                <h5 className="mb-3">MQ3 Sensor</h5>
                <p>
                  The MQ-3 is a type of gas sensor widely used for detecting
                  alcohol vapor concentration in the air. It belongs to a series
                  of gas sensors manufactured by a company called Hanwei
                  Electronics.{" "}
                </p>
                {/* <Link href="">Read More <i class="fa fa-arrow-right ms-2"></i></Link> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-white p-5">
                <img
                  style={{ width: 250, height: 250 }}
                  className="img-fluid mb-4"
                  src="https://m.media-amazon.com/images/I/51H2Gys+CeL.jpg"
                  alt=""
                />
                <h5 className="mb-3">Fire Sensor</h5>
                <p>
                  Fire sensors, also known as flame detectors or fire detectors,
                  are devices designed to detect the presence of fire or flames.
                  They are crucial components in fire alarm systems and safety
                  equipment, providing early detection of fires to help prevent
                  property damage and save lives.
                </p>
                {/* <Link href="">Read More <i class="fa fa-arrow-right ms-2"></i></Link> */}
              </div>
            </div>
            <div
              style={{ maxHeight: 300 }}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-white p-5">
                <img
                  style={{ width: 250, height: 250 }}
                  className="img-fluid mb-4"
                  src="https://robocraze.com/cdn/shop/products/mq2_gas_sensor_module1_1_1.jpg?v=1670580773"
                  alt=""
                />
                <h5 className="mb-3">MQ Toxic Gas Sensor</h5>
                <p>
                  The MQ toxic gas sensor, are widely used in various
                  applications for detecting different types of gases in the
                  environment. These sensors are manufactured by Hanwei
                  Electronics and are based on the principle of gas detection
                  through the change in electrical conductivity of a sensing
                  material when it comes into contact with a specific gas.
                </p>
                {/* <Link href="">Read More <i class="fa fa-arrow-right ms-2"></i></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* Service End */}
      <Link
        href="/#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </Link>
    </div>
  );
}

export default Home;
