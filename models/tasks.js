// require the library 
const mongoose = require('mongoose');

//make the schema
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

// export DB
const tasks = mongoose.model('tasks', taskSchema);
module.exports = tasks;