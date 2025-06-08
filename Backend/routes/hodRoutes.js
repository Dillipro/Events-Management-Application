import express from 'express'
import { dashboard } from '../controllers/hod/dashboard.js';
import{ allEvents } from '../controllers/hod/allEvents.js'
import { createEvent, createUser } from '../controllers/hod/createSample.js'

const hodRoutes = express.Router();

hodRoutes.get('/allEvents/', allEvents);
hodRoutes.get('/dashboard', dashboard);

//utils
hodRoutes.post('/createEvent/', createEvent);
hodRoutes.post('/createUser/', createUser);



export default hodRoutes;