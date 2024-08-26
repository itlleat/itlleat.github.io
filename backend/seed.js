// backend/seed.js
const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path if necessary

// Connect to MongoDB
mongoose.connect('mongodb+srv://big_boss:OEGQbmkTb6XwLBpO@portfolio.xl1j2.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Sample user data
const users = [
  { username: 'John Doe', email: 'john@example.com', password: 'password123' },
  { username: 'Jane Smith', email: 'jane@example.com', password: 'password1234' },
];

// Function to seed the database
const seedDB = async () => {
  try {
    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Insert sample users
    await User.insertMany(users);
    console.log('Inserted sample users');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
