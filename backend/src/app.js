import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';

import mongoose from 'mongoose';
import dotenv from 'dotenv';                          
import { fileURLToPath } from 'url';                 
import path from 'path'; 

import { connectToSocket } from './controllers/socketManager.js'; 

import userRoutes from "./routes/users.routes.js";

const __filename = fileURLToPath(import.meta.url);    
const __dirname = path.dirname(__filename);          
dotenv.config({ path: path.join(__dirname, '..', '.env') }); 


const app = express(); 
const server = createServer(app);
const io = connectToSocket(server); 

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: '40kb' }));
app.use(express.urlencoded({ limit: '40kb', extended: true }));

app.use("/api/v1/users", userRoutes); 

const start = async () => {
app.set("mongo_user")
    const connectionDb = await mongoose.connect(process.env.MONGO_URI) 

    console.log(`Connected to MongoDB: ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log('Server is running on port 8000');
    });   
        
}
 

start(); 







