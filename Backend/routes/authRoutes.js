import express from 'express'


const authRoutes = express.Router();

authRoutes.use('/login/who', login);

export default authRoutes;