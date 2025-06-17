
  

// routes/coordinatorRoutes.js
import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';



import {
  createProgramme,
  getProgrammes,
  getProgrammeById,
  updateProgramme,
  deleteProgramme,
  generateProgrammePDF
} from '../controllers/coordinator/dashboard.js';

import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }
});

const router = express.Router();



router.route('/programmes')
  .get(getProgrammes)
  .post(upload.single('brochure'), createProgramme);

router.route('/programmes/:id')
  .get(getProgrammeById)
  .put(upload.single('brochure'), updateProgramme)
  .delete(deleteProgramme);

// Add the PDF route
router.get('/programmes/:id/pdf',  generateProgrammePDF);

export default router;


