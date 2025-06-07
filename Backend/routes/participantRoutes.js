import express from 'express'
import { dashboard } from '../controllers/participant/dashboard.js'

const participantRoutes = express.Router();

participantRoutes.use('/hod', dashboard);
//...etc

export default participantRoutes;