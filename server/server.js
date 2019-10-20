const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


// Init express
const app = express();

// Connect to DataBase
connectDB();

// Setting Cross origin ressource sharing and Body-parser
app.use(cors());
app.use(express.json({ extented: false }));

// Define Routes
app.use('/api/person', require('./routes/api/person'));

// Setting PORT
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server in running on Port: ${PORT}`);
})

