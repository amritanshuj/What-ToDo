// require the library
const mongoose = require('mongoose');

//connect to DB
mongoose.connect('mongodb://127.0.0.1/tasks_list_db', {useNewUrlParser: true});

// acquire connection to check if it is successful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and runing then print the message 
db.once('open', function(){
    console.log("Successfully connected to database");
})