const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log('server is listening on port 3000');
});