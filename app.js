const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./src/config/mongoDB');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const baseRoutes = require('./src/routes/userRoutes');

app.use('/api/user', baseRoutes);

app.listen(process.env.PORT, () => {
    console.log('server is listening on port 3000');
});