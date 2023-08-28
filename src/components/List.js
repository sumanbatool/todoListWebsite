import React, { useState, useEffect } from 'react';
import './List.css';
import axios from 'axios';

const TaskList = ({ updateTaskStatus, deleteTask }) => {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get('http://192.168.10.14:2000/task/showtasks')
      .then((response) => setTasks(response.data) )
      .catch((error) => console.error('Error fetching tasks:', error));
  };
console.log(tasks.length)
  const handleDelete = (taskId) => {
    axios.delete(`http://192.168.10.14:2000/task/deltask/${taskId}`)
      .then(() => {
        fetchTasks(); // Fetch updated tasks after successful deletion
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  const handleComplete = (taskId) => {
    axios.put(`http://192.168.10.14:2000/task/completetask/${taskId}`)
      .then(() => {
        fetchTasks(); // Fetch updated tasks after marking as completed
      })
      .catch((error) => console.error('Error marking task as completed:', error));
  };

  return (
    <>
    <h3>Total Tasks:{tasks.length}</h3>

    <div className="container">
      {tasks.map((task, index) => (
        <div className={`task ${task.completed ? 'completed' : ''}`} key={task._id}>
          <div className='nameCont'>
          <p className='name'> Task : </p>
          <p className='value'>{task.taskText}</p>
          </div>
         <div className='timeCont'>
          <p className='name'> Time : </p>
          <p>{task.taskTime}</p>
         </div>
         <div className='timeCont'>
          <p className='name'> Date : </p>
          <p>{task.taskDate}</p>
         </div>
          <div>
          <button className="delete-button" onClick={() => handleDelete(task._id)}>
            Delete
          </button>
          {!task.completed && (
            <button className="complete-button" onClick={() => handleComplete(task._id)}>
              Complete
            </button>
          )}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default TaskList;
