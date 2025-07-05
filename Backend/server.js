import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import db from './config/db.js';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure dotenv to look for .env file in the Backend directory
dotenv.config({ path: join(__dirname, '.env') });

const app = express();
app.use(express.json());
app.use(cors());
db.connectDb();


app.listen(process.env.PORT,"0.0.0.0", ()=>{
  console.log(`server started: http://localhost:${process.env.PORT}`);
});