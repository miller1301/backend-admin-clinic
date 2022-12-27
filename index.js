require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Create express server
const app = express();

// Configure CORS
app.use(cors());

// Lectura y parseo Body
app.use(express.json());

// DB Connection
dbConnection();

// Routes
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));

app.listen( process.env.PORT, () => {
    console.log('Servidor en puerto ' + process.env.PORT);
});