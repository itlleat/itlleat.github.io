// require("dotenv").config();
// const express = require('express');
// const cors = require('cors');

// // MongoDB connection setup
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.MONGO_URI;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connectToDatabase() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch (error) {
//     console.error("Failed to connect to MongoDB", error);
//     process.exit(1); // Exit process with failure
//   }
// }

// connectToDatabase();

// // Express app setup
// const app = express();
// app.use(cors());
// app.use(express.json());

// // Import routes
// const authRoutes = require('./routes/authRoutes');

// // Use routes
// app.use('/api/auth', authRoutes);

// // Start the server
// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });

const express = require('express');
const cors = require('cors');

// MongoDB connection setup
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://big_boss:OEGQbmkTb6XwLBpO@portfolio.xl1j2.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit process with failure
  }
}

connectToDatabase();

// Express app setup
const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
