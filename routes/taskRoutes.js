const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/getTask', taskController.getAllTasks);
router.post('/createTask', taskController.createTask);
router.put('/:  taskId', taskController.updateTask);
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;
