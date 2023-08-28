import React,{useEffect,useState} from 'react';
import axios from 'axios';

const TaskItem = ({ index, task, updateTaskStatus, deleteTask }) => {
  console.log(task.time)
  const [tasks, setTasks] = useState([]);
  const handleStatusToggle = () => {
    updateTaskStatus(index);
  };
  
console.log("tasks",tasks.taskTime)
  const handleDelete = () => {
    deleteTask(index);
  };
  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(':');
    const parsedHours = parseInt(hours, 10);
    const amPm = parsedHours >= 12 ? 'PM' : 'AM';
    const formattedHours = parsedHours % 12 === 0 ? 12 : parsedHours % 12;
    return `${formattedHours}:${minutes} ${amPm}`;
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-text">{task.text}</div>
      <div className="task-time">{formatTime(task.time)}</div>
      <div className="task-actions">
        <button onClick={handleStatusToggle}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
