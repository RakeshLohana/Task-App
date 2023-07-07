const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors=require('cors')
app.use(cors());
const port = 3000;
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());
mongoose
  .connect('mongodb+srv://rakeshlohana15:rakesh.123@cluster0.lylcejz.mongodb.net/ChatGptBackendNode', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
