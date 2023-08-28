// src/App.js

import React, { useState } from 'react';
import './App.css'; // Import your styles here
import TaskForm from './components/TaskForm';
import TaskList from './components/List';

function App() {
  // const [tasks, setTasks] = useState([]);

  // const addTask = (taskText, taskTime) => {
  //   setTasks([...tasks, { text: taskText, time: taskTime, completed: false }]);
  // };
  
  
  
  // const updateTaskStatus = (index) => {
  //   const updatedTasks = [...tasks];
  //   updatedTasks[index].completed = !updatedTasks[index].completed;
  //   setTasks(updatedTasks);
  // };

  // const deleteTask = (index) => {
  //   const updatedTasks = tasks.filter((_, i) => i !== index);
  //   setTasks(updatedTasks);
  // };

  return (
    <div className='app'>
      <div className="header">
        <img src='https://i.ibb.co/Zf5C8w5/OIP.jpg' alt="An example image" className="image" />
        <h1 className="title">My To-Do List</h1>
      </div>
      <TaskForm  />
      <TaskList
        //tasks={tasks}
        // updateTaskStatus={updateTaskStatus}
        // deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
