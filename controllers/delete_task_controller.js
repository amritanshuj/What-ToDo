const tasks = require('../models/tasks');

// Delete All Tasks
module.exports.deleteAll = function(req, res){
    tasks.deleteMany({}, function (err){
        if(err){
            console.log("Error in deleting tasks");
            return;
        }
        res.redirect('back');
    });
}

// Delete Selected Task
module.exports.delete = function(req, res){
    let id = req.query.id;
    tasks.findByIdAndDelete(id, function (err){
        if(err){
            console.log("Error in deleting task");
            return;
        }
        res.redirect('back');
    });
}

