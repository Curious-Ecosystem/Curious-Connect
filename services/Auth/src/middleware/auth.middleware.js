const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const { errorHadnler } = require("../utils/error");

const userauth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) next(errorHadnler(401, "You most be loged in"));

  const token = authorization.replace("Bearer ", "");

  try {
    const { id, email, name } = jwt.verify(token, process.env.TOKEN_SECRET);

    const user = await User.findOne({ _id: id });

    if (!user) return next(errorHadnler(401, "please login again"));

    res.cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

    res.status(200).json({ res });
  } catch (error) {
    return next(errorHadnler(403, "token is not valid"));
  }
};

module.exports = { userauth };
