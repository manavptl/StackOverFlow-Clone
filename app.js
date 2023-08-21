const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./src/config/mongoDB');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const baseRoutes = require('./src/routes/userRoutes');
const questionRoutes = require('./src/routes/questionRoutes');
const votingRoutes = require('./src/routes/votingRoutes');
const answerRoutes = require('./src/routes/answerRoutes');

app.use('/api/user', baseRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/voting', votingRoutes);
app.use('/api/answer', answerRoutes);

app.listen(process.env.PORT, () => {
    console.log('server is listening on port 3000');
});