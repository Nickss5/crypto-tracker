const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

//Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

connectDB();


const apiRoutes = require('./routes/api');
app.use('/api',apiRoutes);

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'views', 'index.html'))
})

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})