const connectDB = require("../../db/dbConnect");

async function ViewMQToxicGasData(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("mq_toxic_gas");

    const mqToxicGasData = await collection.find({}).toArray();

    if (mqToxicGasData.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "No Data Found!!" });
    }
    res.status(200).json({
      data: mqToxicGasData,
      success: true,
      message: "Data Found Successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ViewMQToxicGasData };
