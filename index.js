const express = require('express');
const app = express();
const port = 8000;

// Get Data from Database
const db = require('./config/mongoose');
const tasks = require('./models/tasks');
app.use(express.urlencoded()); 

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('static'));

// Use Express Router
app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${port}`);
    }

    console.log(`Server is runing on port: ${port}`);
});