import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { CDBDataTable } from "cdbreact";

function FeedbackData() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getFeedback")
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);

  var formattedSensorData = [];
  if (datas.length === 0) {
  } else {
    formattedSensorData = datas.data?.map((sensor) => ({
      "User Name": sensor.userName,
      Rating: sensor.rating,
      Review: sensor.review,
      Time: new Date(sensor.timestamp).toLocaleString(),
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
                        <h2>Feedback Data</h2>
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
                      <div>
                        <CDBDataTable
                          paginationLabel={["Previous", "Next"]}
                          s
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

export default FeedbackData;
