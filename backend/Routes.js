const express = require('express');
const TaskRouter = express.Router();
const Task = require('./taskModel');
TaskRouter.post('/addtasks', async (req, res) => {
    const taskText=req.body.taskText
    console.log(taskText)
    const taskTime=req.body.taskTime
    console.log(taskTime)
    const taskDate=req.body.taskDate

    try {
      const newTask = new Task({
        taskText: taskText,
        taskTime: taskTime,
        taskDate:taskDate,
      });
  
      const savedTask = await newTask.save();
      res.json(savedTask);
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Failed to create task' });
    }
  });
  TaskRouter.get('/showtasks', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  TaskRouter.delete('/deltask/:taskId', async (req, res) => {
    const { taskId } = req.params;
  
    try {
      // Find the task by ID and remove it from the database
      await Task.findByIdAndDelete(taskId);
  
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ error: 'An error occurred while deleting the task' });
    }
  });
  
TaskRouter.put('/completetask/:taskId', async (req, res) => {
  const { taskId } = req.params;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { completed: true }, // Update the 'completed' field to true
      { new: true } // Return the updated task
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error marking task as completed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


  module.exports = TaskRouter;
