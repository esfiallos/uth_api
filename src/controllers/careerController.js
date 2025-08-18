import { query } from '../config/poolPostgres.js';

import dotenv from 'dotenv';
dotenv.config();



export const getCareers= async (req, res) => {
  try {
    console.log('Password:', process.env.DB_USER); // temporal para ver qué lee

    const result = await query('SELECT * FROM carreras');
    res.json(result.rows);
  } catch (error) {
    console.error('Error en getCarreras:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};