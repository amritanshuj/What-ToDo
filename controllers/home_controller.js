const tasks = require('../models/tasks');

// Render the home page
module.exports.home = function(req, res){
      tasks.find({}, function(err, tasks){
          if(err){
              console.log("Error in fetching tasks from db");
              return;    
          }
          return res.render('home', {
              title: "What ToDo - Task List",
              tasks_list : tasks
          });
      });
};
