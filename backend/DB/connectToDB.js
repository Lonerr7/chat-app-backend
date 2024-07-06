import mongoose from 'mongoose';

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log(`Successfully connected to the database!`);
  } catch (error) {
    console.error(`Connection to DB failed`, error);
  }
};
