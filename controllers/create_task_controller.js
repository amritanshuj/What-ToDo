const tasks = require('../models/tasks');


// Create task based on data from req.body
module.exports.create = function(req, res){
    console.log(req.body);
    tasks.create({
        description: req.body.description,
        category: req.body.category,
         isChecked: req.body.isChecked,
        date: req.body.date  
    }, function(err, newTask){
        if(err){
            console.log('Error in creating a task!');
            return; 
        }

        console.log("The new task we added: ",newTask);
        res.redirect('back');  
    })    
}

