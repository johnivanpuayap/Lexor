import express from 'express';
import { runInterpreter } from '../controllers/interpreterController';

const router = express.Router();

router.post('/run', runInterpreter); // POST to /api/interpreter/run

export default router;