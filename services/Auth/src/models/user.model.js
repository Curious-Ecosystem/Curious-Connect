const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// user models

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// middleware running before save() used;

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// method for generating token
userSchema.methods.generateAuthToken = function () {
  const payload = { id: this._id, email: this.email, name: this.name };
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "1800s",
  });
  return token;
};

// Getting basic user info from here
userSchema.methods.getUserData = function () {
  return {
    name: this.name,
    email: this.email,
  };
};

const UserModel = mongoose.model("user.model", userSchema);

module.exports = UserModel;
