require('dotenv').config();
require('./config/database').connect();

const trendingRoutes = require("./routes/trending");

const express = require("express");
const cors = require('cors');

let app = express();

app.use(express.json());
app.use(cors());

app.use('/cricbuzz', trendingRoutes)

module.exports = app;