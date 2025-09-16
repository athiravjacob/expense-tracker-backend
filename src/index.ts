import dotenv from 'dotenv';
dotenv.config()
import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 4000;
const MONGO_URI =
  process.env.MONGO_URI || '';

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('mongo db connected');

    app.listen(PORT, () => {
      console.log('server started at PORT', PORT);
    });
  } catch (error) {
    console.log('Failed to start server', error);
  }
}

startServer();
