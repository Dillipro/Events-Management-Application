import express from 'express';
import registerUser from '../controllers/auth/registerControllers.js';
import loginUser from '../controllers/auth/loginControllers.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;
