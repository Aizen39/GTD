//framework express
const express = require('express');

//accès aux variables d'environnement
require('dotenv').config({path: './config/.env'})

require('./config/db');

const app = express();

//config du port
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});