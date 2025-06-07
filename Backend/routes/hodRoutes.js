import express from 'express'
import { dashboard } from '../controllers/hod/dashboard.js';

const hodRoutes = express.Router();

hodRoutes.use('/hod', dashboard);
//...etc

export default hodRoutes;