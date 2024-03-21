// Import required modules
const express = require("express");
const connect = require("./config/DB");
const cors = require("cors");
const announcementsRouter = require("./routes/announcements");
const todosRouter = require("./routes/todos");

// Load environment variables
require("dotenv").config();

// Create an instance of Express
const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Create a main router
const mainRouter = express.Router();

// Mount announcements router under /announcements endpoint
mainRouter.use("/announcements", announcementsRouter);
mainRouter.use("/todos", todosRouter);

// Mount main router under /api/v1 endpoint
app.use("/api/v1", mainRouter);

// Connect to the database using the URI from environment variables
connect(process.env.URI_Cloud);

// Set the port to listen on, defaulting to 3000 if PORT environment variable is not set
const port = process.env.PORT || 3000;

// Start the server and log the port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
