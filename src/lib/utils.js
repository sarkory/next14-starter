const { default: mongoose } = require("mongoose");

const connection = {}

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Already connected to the database");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};