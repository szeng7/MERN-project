const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect database
connectDB();

// Init middleware
app.use(express.json());

app.get("/", (req, res) => res.send("WORKING"));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000; //5000 on local, env var when deployed

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
