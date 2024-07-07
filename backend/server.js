import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import { connectToDB } from './DB/connectToDB.js';

const app = express();
const PORT = +process.env.PORT || 5000;

dotenv.config();

app.use(express.json({ limit: '20kb' })); // to parse the incoming requests with JSON payloads (req.body)

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  connectToDB();
  console.log(`server working on port: ${PORT}!`);
});
