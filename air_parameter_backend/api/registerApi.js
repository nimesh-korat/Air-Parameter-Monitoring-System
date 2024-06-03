const { ObjectId } = require("mongodb");
const connectDB = require("../db/dbConnect");

async function SignUpApi(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("users");
    const deviceCollection = db.collection("devices");

    const { username, email, role, phoneNo, password, deviceId, area } = req.body;

    if (!username || !email || !role || !phoneNo || !password || !deviceId || !area) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields!" });
    }

    const userExist = await collection.findOne({ email });
    console.log("UserExist:", userExist);

    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "Email Already Exist!" });
    }

    const isDeviceExist = await deviceCollection.findOne({ _id: new ObjectId(deviceId) });
    if (!isDeviceExist) {
      return res
        .status(400)
        .json({ success: false, message: "Device Not Exist" });
    }

    const isDeviceRegistered = await deviceCollection.findOne({
      _id: new ObjectId(deviceId),
      userId: { $exists: true }
    });
    if (isDeviceRegistered) {
      return res.status(400)
        .json({ success: false, message: "Device Already registered" });
    }

    const { insertedId } = await collection.insertOne({
      username,
      email,
      role,
      phoneNo,
      password,
      area
    });

    await deviceCollection.updateOne({ _id: new ObjectId(deviceId) }, { $set: { userId: new ObjectId(insertedId), area } });

    return res
      .status(201)
      .json({ success: true, message: "Registration Successful" });
  } catch (error) {
    console.error("Registration Failed:", error);
    return res
      .status(500)
      .json({ success: false, error: "Registration Failed" });
  }
}

module.exports = { SignUpApi };
