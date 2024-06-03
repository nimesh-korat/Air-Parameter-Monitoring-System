const { LoginApi } = require("./api/loginApi");
const { SignUpApi } = require("./api/registerApi");
const connectDB = require("./db/dbConnect");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const Session = require("./api/session");
const Logout = require("./api/logout");
const { TempratureSensorApi } = require("./api/user/tempratureData");
const { ViewTempratureData } = require("./api/admin/viewTempratureData");
const { ViewSmokeData } = require("./api/admin/viewSmokeData");
const { ViewMQ135Data } = require("./api/admin/viewMQ135Data");
const { ViewMQ3Data } = require("./api/admin/viewMQ3Data");
const { ViewFireData } = require("./api/admin/viewFireData");
const { ViewMQToxicGasData } = require("./api/admin/viewMQToxixGasData");
const { ViewusersData } = require("./api/admin/viewUsers");
const { AddDevice } = require("./api/user/addDevice");
const { ViewDeviceLocation } = require("./api/admin/viewDeviceLocation");
const { AddComplaints } = require("./api/user/addComplaints");
const { ViewComplaints } = require("./api/admin/viewComplaint");
const { AddFeedback } = require("./api/user/addFeedback");
const { ViewAlerts } = require("./api/admin/viewAlerts");
const { ViewFeedback } = require("./api/admin/viewFeedback");
const { GetHistoryData } = require("./api/user/getHistoryData");
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.post("/register", SignUpApi);
app.post("/login", LoginApi);
app.post("/session", Session);
app.get("/logout", Logout);

//ADMIN APIS
app.get("/getTemprature", ViewTempratureData);
app.get("/getSmoke", ViewSmokeData);
app.get("/getMQ135", ViewMQ135Data);
app.get("/getMQ3", ViewMQ3Data);
app.get("/getFire", ViewFireData);
app.get("/getMQToxicGas", ViewMQToxicGasData);
app.get("/getUsers", ViewusersData);
app.get("/getComplaints", ViewComplaints);
app.get("/getDeviceLocation", ViewDeviceLocation);
app.get("/viewAlerts", ViewAlerts);
app.get("/getFeedback", ViewFeedback);

//USER APIS
app.post("/addDevice", AddDevice);
app.post("/temprature", TempratureSensorApi);
app.post("/addComplaints", AddComplaints);
app.post("/addFeedback", AddFeedback);
app.post("/getHistoryData", GetHistoryData);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
