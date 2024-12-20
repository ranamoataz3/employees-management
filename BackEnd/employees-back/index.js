// Importing the required modules
const express = require("express");
var app = express();
const mongoose = require("mongoose");
const mongo = require("mongodb");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");


// Importing the routes
const employeeRouter = require("./routes/employeeRoute");

// db connection
const PORT = 3005;
const dbURL =
  "mongodb+srv://rana3:rana12345678@kiantask.z9ehd.mongodb.net/preInterview?retryWrites=true&w=majority&appName=kiantask";

app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "secrethash",
    resave: false,
    saveUninitialized: true.valueOf,
  })
);
// connecting to the database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database successfully");
    //Start the server
    const server = app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT}`)
    );
    server.on("error", () => {
      console.log("Server error", error);
    });
  } catch (error) {
    console.log(error);
  }
};

connectToDatabase();

app.use("/employees", employeeRouter);

module.exports = app;
