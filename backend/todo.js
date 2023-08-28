// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 2000;
const mongoose = require('mongoose');
const Task = require('./taskModel');
const TaskRouter = require('./Routes');

// Define routes and middleware here
app.use(cors());
app.use(express.json());
// Helps server-side app to read URL-encoded data being sent from client side app.
app.use(express.urlencoded({extended: true}));
mongoose
  .connect('mongodb://127.0.0.1:27017/ToDoList', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
  
  app.use('/task',TaskRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
