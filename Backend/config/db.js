import mongoose from "mongoose";
import user from "../models/userModel.js"

const connectDb =  async()=>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongodb connected: ${conn.connection.host}`);
    await user.create({
      name : "abc",
      email : "sfsf",
      role : "admin",
      password : "abcd"
    });
  }
  catch(error){
    console.log(error.message);
    process.exit(1);
  }
}

const closeDb = async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error(`Error closing MongoDB connection: ${error.message}`);
  }
};

export default { connectDb , closeDb};
