import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import db from './config/db.js';

const app = express()
app.use(express.json());
app.use(cors());
dotenv.config();
db.connectDb();


app.listen(process.env.PORT,"0.0.0.0", ()=>{
  console.log(`server started: http://localhost:${process.env.PORT}`);
});