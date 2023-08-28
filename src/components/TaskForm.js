import React, { useState } from 'react';
import './taskform.css'
import axios from 'axios';
const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(':');
    const parsedHours = parseInt(hours, 10);
    const amPm = parsedHours >= 12 ? 'PM' : 'AM';
    const formattedHours = parsedHours % 12 === 0 ? 12 : parsedHours % 12;
    return `${formattedHours}:${minutes} ${amPm}`;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (taskText.trim() !== '') {
      //const combinedDateTime = new Date(taskTime);
      //addTask(taskText, taskTime);
      setTaskText('');
      //setTaskDate('');
      //setTaskTime('');
      try {
        const response = await axios.post('http://192.168.10.14:2000/task/addtasks', {
          taskText:taskText,
          taskTime:  formatTime(taskTime),
          taskDate:taskDate
        });
        const savedTask = response.data;
        console.log(savedTask.taskText, savedTask.taskTime);
        setTaskText('');
        setTaskTime('');
      } catch (error) {
        console.error('Error submitting task:', error);
      }
    }
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <input
          type="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
        />
        <button type="submit" className="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
