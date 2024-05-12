require("dotenv").config();

const config = {
  PORT: process.env.PORT || 5000,
  TOKEN_SECRET: process.env.TOKEN_SECRET || "JWT_Secret",
  COOKIE_SECRET: process.env.COOKIE_SECRET || "Cookie_Secret",
  DB_URI: process.env.DB_URI || "mongodb://127.0.0.1:27017/auth",
  NODE_ENV: process.env.NODE_ENV || "development",
};

module.exports = config;
