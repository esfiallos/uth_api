import express from "express";
import careersRoutes from './routes/careersRoutes.js';


const app = express();


// Middlewares
app.use(express.json());

// Rutas
app.use('/api/uth/v1/careers', careersRoutes);

export default app;
