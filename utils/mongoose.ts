'use server'

import mongoose from 'mongoose';

const { MongoClient, ServerApiVersion } = require('mongodb');
let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true); // Set strictQuery to false
  if (isConnected) {
    console.log('MongoDB is already connected');  
    return;
  }

  try {
    console.log('connecting')
    await mongoose.connect(process.env.MONGODB_URI as string, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    isConnected = true;
    console.log('MongoDB connected');

  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};