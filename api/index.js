import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';

dotenv.config();

mongoose.connect(process.env.MONGO_DB)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow your frontend's origin
  credentials: true // If you need to send cookies or auth headers
}));
app.use(express.json());

// Routes
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    message,
    success: false
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!!`));
