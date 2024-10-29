const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tshirtRoutes = require('./routes/tshirts');

const app = express();

app.use(cors()); // Додаємо CORS, щоб уникнути помилок при запитах
app.use(bodyParser.json());
app.use('/api/tshirts', tshirtRoutes);

module.exports = app;
