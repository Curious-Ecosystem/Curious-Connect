const config = require("./config/config");

const express = require("express");

const cookieParser = require("cookie-parser");
const connectDB = require("./config/config.db");

async function server() {
  const app = express();

  // connecting database;
  connectDB(config.DB_URI);

  // middleware for extracting cookies;
  app.use(cookieParser(config.COOKIE_SECRET));

  // middlewares for getting data from the request body;
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const authRoutes = require("./routes/auth.route");

  // auth routes;

  app.use("/api", authRoutes);

  app.listen(config.PORT, () => {
    console.log(`server is running at: http://localhost:${config.PORT}`);
  });
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const stack = config.NODE_ENV === "development" ? err.stack : undefined;
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
      stack
    });
  });
}

module.exports = server;
