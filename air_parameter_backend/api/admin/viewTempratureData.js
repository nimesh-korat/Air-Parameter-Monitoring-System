const connectDB = require("../../db/dbConnect");

async function ViewTempratureData(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("temprature");

    const tempratureData = await collection.find({}).toArray();

    if (tempratureData.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "No Data Found!!" });
    }
    res.status(200).json({
      data: tempratureData,
      success: true,
      message: "Data Found Successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { ViewTempratureData };
