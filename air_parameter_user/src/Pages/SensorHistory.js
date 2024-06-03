import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { CDBDataTable } from "cdbreact";
import { Link, useNavigate } from "react-router-dom";

function SensorHistory() {
  // State to keep track of whether the page has finished loading or not
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Simulating loading delay with useEffect
  useEffect(() => {
    // Simulating a delay of 2 seconds before setting isLoading to false
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timeout if the component unmounts or when isLoading becomes false
    return () => clearTimeout(timeout);
  }, []);

  const [isLoaded, setLoaded] = useState(false);
  const [datas, setDatas] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState("fireData");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/getHistoryData"
        );
        if (response.data.data) {
          setDatas(response.data.data);
        }

        setLoaded(true);
      } catch (error) {
        alert(error.response.data.message);
        navigate('/');
        console.error("Error fetching live data:", error);
        setLoaded(true); // Set loaded to true even if there's an error
      }
    };

    fetchData();
  }, []);

  console.log(datas);

  const filteredData = datas[selectedSensor];

  return (
    <>
      <Header />
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">History</h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    History
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
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container ">
            {isLoaded ? (
              filteredData.length > 0 ? (
                <>
                  <select
                    className="form-select mb-3 w-25"
                    value={selectedSensor}
                    onChange={(e) => setSelectedSensor(e.target.value)}
                  >
                    <option value="fireData">Fire Data</option>
                    <option value="mq3Data">MQ3 Data</option>
                    <option value="mqToxicGasData">MQ Toxic Gas Data</option>
                    <option value="mq135Data">MQ 135 Data</option>
                    <option value="smokeData">Smoke Data</option>
                    <option value="tempData">Temperature Data</option>
                  </select>
                  <CDBDataTable
                    paginationLabel={["Previous", "Next"]}
                    striped
                    sortable
                    bordered
                    responsive
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={{
                      columns: [
                        { label: "ID", field: "_id" },
                        { label: "Device ID", field: "deviceId" },
                        { label: "Sensor Value", field: "sensorValue" },
                        { label: "TimeStamp", field: "timestamp" },
                      ],
                      rows: filteredData.map((data) => ({
                        _id: data._id,
                        deviceId: data.deviceId,
                        sensorValue: data.sensorValue,
                        timestamp: new Date(data.timestamp).toLocaleString(),
                      })),
                    }}
                  />
                </>
              ) : (
                <p>No data found</p>
              )
            ) : (
              <p>Please wait, loading live data...</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
      <a
        href="/#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
}

export default SensorHistory;
