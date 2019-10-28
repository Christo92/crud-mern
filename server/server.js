const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

// Init express
const app = express();

// Connect to DataBase
connectDB();

// Setting Cross origin ressource sharing and Body-parser
app.use(cors());
app.use(express.json({ extented: false }));

// Define Routes
app.use('/api/person', require('./routes/api/person'));

// Heroku config
app.use(express.static('../client/build'));

app.get("*", (req, res) => {
    res.sendFile('../client/build/index.html');
});

// Setting PORT
const PORT = process.env.PORT || 6400;

app.listen(PORT, () => {
    console.log(`Server in running on Port: ${PORT}`);
})

