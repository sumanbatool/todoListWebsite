// task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskText: {
    type: String,
  },
  taskTime: {
    type: String ,
  },
  taskDate:{
    type:String,
  },
  completed:{
    type:Boolean,
    default:false,
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
