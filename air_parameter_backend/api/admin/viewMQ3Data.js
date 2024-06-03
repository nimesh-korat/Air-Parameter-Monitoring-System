const connectDB = require("../../db/dbConnect");

async function ViewMQ3Data(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("mq_3");

    const mq3Data = await collection.find({}).toArray();

    if (mq3Data.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "No Data Found!!" });
    }
    res.status(200).json({
      data: mq3Data,
      success: true,
      message: "Data Found Successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ViewMQ3Data };
