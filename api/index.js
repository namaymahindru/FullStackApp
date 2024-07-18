import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
//console.log("MongoDB connection string:", process.env.MONGO);

app.use(express.json());// this allows to send json data to the server

app.use(cookieParser());
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server only after a successful connection to MongoDB
    app.listen(3000, () => {
      console.log("Server is running on port 3000!");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json(
    {
      success: false,
      statusCode,
      message,

    }
  )

})