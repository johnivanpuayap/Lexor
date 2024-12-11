import express from 'express';
import cors from 'cors';
import interpreterRoutes from './routers/interpreterRoutes';

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies

app.use('/api/interpreter', interpreterRoutes); // API for running the interpreter

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));