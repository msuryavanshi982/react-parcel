// server.js
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const cors = require("cors");
const typeDefs = require("./typeDefs/userTypeDefs");
const resolvers = require("./resolvers/userResolver");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://pst:pst123%40@cluster0.lgg8c.mongodb.net/graphql-users",
     )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();

// Enable CORS
app.use(cors());

// Create Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  // Start the Express server
  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
}

startServer();
