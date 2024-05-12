const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const { errorHadnler } = require("../utils/error");

async function signup(req, res) {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    console.log(user);

    // if user already exists;

    if (user) res.json(errorHadnler(400, "user already exists"));

    user = new User({
      name,
      email,
      password,
    });

    await user.save();

    // creating a jwt token; check user model

    const token = user.generateAuthToken();

    // getting user data format {name:"example", email:"dogeshdog@cheems.com"}

    const userResponse = user.getUserData();

    return res.status(200).json({ ...userResponse, token });
  } catch (error) {
    res.status(500).json({ ...error });
  }
}

async function signin(req, res, next) {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    // console.log(user);

    // checking whether user exists or not;

    if (!user) next(errorHadnler(404, "user not exisits"));

    const isMatch = await bcrypt.compare(password, user.password);

    // if the password not matched;

    if (!isMatch) next(errorHadnler(401, "Invalid password"));

    // generating jwt token;

    const token = user.generateAuthToken();

    const userResposne = user.getUserData();

    return res.status(200).json({ token, userResposne });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ...error });
  }
}

module.exports = {
  signup,
  signin,
};
