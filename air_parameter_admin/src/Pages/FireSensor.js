import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";

function FireSensor() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getFire")
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);

  var formattedSensorData = [];
  if (datas.length === 0) {
  } else {
    formattedSensorData = datas.data?.map((sensor) => ({
      DeviceId: sensor.deviceId,
      Device: sensor.deviceName,
      Sensor: sensor.sensorName,
      Value: sensor.sensorValue,
      Area: sensor.area,
      Time: new Date(sensor.timestamp).toLocaleString(),
      LoginId: sensor.loginId,
    }));
  }

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
                        <h2>Fire Sensor</h2>
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
                          <a href="../index.html">
                            <i className="ik ik-home" />
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/#">Tables</a>
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
                      <div className="dt-responsive">
                        <CDBContainer>
                          <CDBCard>
                            <CDBCardBody>
                              <CDBDataTable
                                striped
                                bordered
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
                                materialSearch={true}
                              />
                            </CDBCardBody>
                          </CDBCard>
                        </CDBContainer>
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

export default FireSensor;
