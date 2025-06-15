import express from 'express'
import { dashboard } from '../controllers/hod/dashboard.js';
import{ allEvents } from '../controllers/hod/allEvents.js'
import { createEvent, createUser } from '../controllers/hod/createSample.js'
import { approveEvent, rejectEvent } from '../controllers/hod/updatedStatus.js';

const hodRoutes = express.Router();

hodRoutes.get('/allEvents/', allEvents);
hodRoutes.put('/event/approve', approveEvent);
hodRoutes.put('/event/reject', rejectEvent);

//utils
hodRoutes.post('/createEvent/', createEvent);
hodRoutes.post('/createUser/', createUser);



export default hodRoutes;