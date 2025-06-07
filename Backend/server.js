import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import db from './config/db.js';
import authRoutes from "./routes/authRoutes.js";
import participantRoutes from "./routes/participantRoutes.js";
import coordinatorRoutes from "./routes/coordinatorRoutes.js";
import hodRoutes from "./routes/hodRoutes.js";

const app = express()
app.use(express.json());
app.use(cors());
dotenv.config();
db.connectDb();


app.use("/auth", authRoutes);
app.use("/participant", participantRoutes);
app.use("/coordinator", coordinatorRoutes);
app.use("/hod", hodRoutes);







app.listen(process.env.PORT,"0.0.0.0", ()=>{
  console.log(`server started: http://localhost:${process.env.PORT}`);
});