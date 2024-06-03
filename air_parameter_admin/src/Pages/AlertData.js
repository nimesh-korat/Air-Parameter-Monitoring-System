import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";
import { Link } from "react-router-dom";

function AlertData() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/viewalerts")
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);

  const formattedSensorData =
    datas.alerts?.length > 0
      ? datas.alerts.map((sensor) => ({
          "Device ID": sensor.deviceId,
          Device: sensor.deviceName,
          Sensor: sensor.sensorName,
          Value: sensor.sensorValue,
          Area: sensor.area,
          Time: new Date(sensor.timestamp).toLocaleString(),
          "LOgin ID": sensor.loginId,
        }))
      : [];

  if (formattedSensorData.length === 0) {
    return null; // Return nothing if there is no sensor data
  }

  return (
    <>
      {/* ============================================================== */}
      {/* main wrapper */}
      {/* ============================================================== */}
      <div className="dashboard-main-wrapper">
        {/* ============================================================== */}
        {/* navbar */}
        {/* ============================================================== */}
        <Header />
        {/* ============================================================== */}
        {/* end navbar */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* left sidebar */}
        {/* ============================================================== */}
        <Sidebar />
        {/* ============================================================== */}
        {/* end left sidebar */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* wrapper  */}
        {/* ============================================================== */}
        <div className="dashboard-wrapper">
          <div className="dashboard-ecommerce">
            <div className="container-fluid dashboard-content">
              <div className="ecommerce-widget">
                <div className="row align-items-end">
                  <div className="col-lg-8">
                    <div className="page-header-title">
                      <i className="ik ik-inbox bg-blue" />
                      <div className="d-inline">
                        <h2>Alert Data</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <nav
                      className="breadcrumb-container"
                      aria-label="breadcrumb"
                    >
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="/">
                            <i className="ik ik-home" />
                          </Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="/">Tables</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Data Table
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div>
                        <CDBDataTable
                          paginationLabel={["Previous", "Next"]}
                          striped
                          btn={true}
                          exportToCSV={true}
                          bordered
                          tbodyTextWhite
                          tbodyColor="red"
                          hover
                          entriesOptions={[5, 20, 25]}
                          entries={5}
                          pagesAmount={4}
                          data={{
                            columns: Object.keys(
                              formattedSensorData[0] || {}
                            ).map((key) => ({
                              label: key,
                              field: key,
                            })),
                            rows: formattedSensorData,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end wrapper  */}
        {/* ============================================================== */}
      </div>
      {/* ============================================================== */}
      {/* end main wrapper  */}
      {/* ============================================================== */}
    </>
  );
}

export default AlertData;
