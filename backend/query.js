// backend/query.js
const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path if necessary

// Connect to MongoDB
mongoose.connect('mongodb+srv://big_boss:OEGQbmkTb6XwLBpO@portfolio.xl1j2.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Function to query the database
const queryDB = async () => {
  try {
    const users = await User.find(); // Adjust the query if needed
    console.log('Users:', users);
  } catch (err) {
    console.error('Error querying database:', err);
  } finally {
    mongoose.connection.close();
  }
};

queryDB();
