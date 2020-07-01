const express = require('express');

const router = express.Router();

// Require all controllers
const homeController = require('../controllers/home_controller');
const createTaskController = require('../controllers/create_task_controller');
const deleteTaskController = require('../controllers/delete_task_controller');

console.log("Router loaded");

// Route as per URL
router.get('/', homeController.home);
router.post('/create-task', createTaskController.create);
router.get('/delete-all/', deleteTaskController.deleteAll);
router.get('/delete/', deleteTaskController.delete);

// export router
module.exports = router;