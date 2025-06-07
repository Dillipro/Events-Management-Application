import express from 'express'
import { login } from '../controllers/auth/authControllers.js';

const authRoutes = express.Router();

authRoutes.use('/login/who', login);

export default authRoutes;