const express = require("express");
const app = express();
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

// Import routes
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const jobRoutes = require("./routes/Job");

dotenv.config();

const PORT = process.env.PORT || 4000;

// Database connect
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: __dirname + "/tmp",  
  })
);

// Cloudinary connection
cloudinaryConnect();

 
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/job", jobRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your Server is up and running.",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
