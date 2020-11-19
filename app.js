require('dotenv').config()

const dburl = process.env.MONGO_DB_URL;
const port = process.env.SERVER_PORT || 5000;

// Initialize express app
const express = require('express');
const app = express();

//To parse URL encoded data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) //To parse json data

// Import All routes
const routes = require('./routes');
app.use('/', routes);

//connect to mongo db use mongo
const mongoose = require('mongoose');
mongoose.connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true});

//default router
app.get('/', function(req, res){
   res.send('GET route on things.');
});

app.listen(port, () => {
   console.log(`Server started on port ${port}`);
});
