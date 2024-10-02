const express = require("express");
const app = express();
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const setupPingServer = require("./utils/pingServer");
const baseUrl = process.env.SELF_PING_URL;
const interval = process.env.CUSTOM_INTERVAL;

// Import routes
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const jobRoutes = require("./routes/Job");
const portfolioRoutes = require("./routes/Portfolio")
const contactUsRoute = require("./routes/Contact")

dotenv.config();

const PORT = process.env.PORT || 4000;

// Database connect
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir:"/tmp",
  })
);

// Cloudinary connection
cloudinaryConnect();

 
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/portfolio", portfolioRoutes);
app.use("/api/v1/reach", contactUsRoute);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your Server is up and running.",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});

setInterval(() => setupPingServer(baseUrl), interval);
 