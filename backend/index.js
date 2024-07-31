const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./models/user');

dotenv.config();

const port = process.env.PORT;
const URI = process.env.DB_URI;

mongoose.connect(URI)
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.log("Failed to connect to MongoDB", err));

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/users', async (req, res) => {
  const { id, username } = req.body;
  
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { username },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.status(200).json(user);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
