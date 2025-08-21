// import mongoose from "mongoose";

// const connectDb =  async()=>{
//   try{
//     const conn = await mongoose.connect(process.env.MONGO_URI)
//     //   }
//   catch(error){
//     //     process.exit(1);
//   }
// }

// const closeDb = async () => {
//   try {
//     await mongoose.connection.close();
//     //   } catch (error) {
//     console.error(`Error closing MongoDB connection: ${error.message}`);
//   }
// };

// export default { connectDb , closeDb};

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);

    process.exit(1);
  }
}

const closeDb = async () => {
  try {
    await mongoose.connection.close();

  } catch (error) {
    console.error(`Error closing MongoDB connection: ${error.message}`);
  }
};

export default { connectDb , closeDb };
