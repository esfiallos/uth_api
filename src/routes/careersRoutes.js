// src/routes/userRoutes.js
import { Router } from 'express';
import { getCareers } from '../controllers/careerController.js';

const router = Router();

// GET /users
router.get('/', getCareers);

export default router;
