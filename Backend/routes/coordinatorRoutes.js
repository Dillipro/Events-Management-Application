import express from 'express'
import { dashboard } from '../controllers/coordinator/dashboard.js';
const coordinatorRoutes = express.Router();

coordinatorRoutes.use('/hod', dashboard);
//...etc

export default coordinatorRoutes;