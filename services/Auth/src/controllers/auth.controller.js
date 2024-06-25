const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const { errorHandler } = require("../utils/error");
const cookie = require('cookie'); // Import the 'cookie' library

async function signup(req, res, next) {
  try {
    const { name, email, password } = req.body;
    
    //Check if input is as expected or not
    if (!name || !password || !email) {
      return next(errorHandler(401,'All fields must be filled'))
    }
    
    let user = await User.findOne({ email });

    console.log(user);

    // if user already exists;

    if (user) {
      return next(errorHandler(400, "user already exists"));
    }

    user = new User({
      name,
      email,
      password,
    });

    await user.save();

    // creating a jwt token; check user model

    const token = user.generateAuthToken();

    // Set Cookie in Header
    res.setHeader(
      'Set-Cookie',
      cookie.serialize(
        'token',
        token,
        {
          httpOnly : true,
          maxAge: 60 * 60 * 24,
          sameSite: 'None',  // Restrict when the cookie is sent with cross-origin requests
          secure: false,        // Send the cookie only over HTTPS in production
          path: '/',
        }
      )
    );

    // getting user data format {name:"example", email:"dogeshdog@cheems.com"}
  
    const userResponse = user.getUserData();

    return res.status(200).json({ ...userResponse, token });
  } catch (error) {
    next(error);
  }
}

async function signin(req, res, next) {
  try {
  const { email, password } = req.body;

  //Check if input is as expected or not
  if (!email || !password) {
    return next(errorHandler(401,'All fields must be filled'))
  }

    let user = await User.findOne({ email });

    // checking whether user exists or not;

    if (!user) {
      return next(errorHandler(404, "User does not exists"));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    // if the password not matched;

    if (!isMatch) {
      return next(errorHandler(401, "Invalid password"));
    }

    // generating jwt token;

    const token = user.generateAuthToken();

    // Set Cookie in Header
    res.setHeader(
      'Set-Cookie',
      cookie.serialize(
        'token',
        token,
        {
          httpOnly : true,
          maxAge: 60 * 60 * 24,
          sameSite: 'None',  // Restrict when the cookie is sent with cross-origin requests
          secure: false,        // Send the cookie only over HTTPS in production
          path: '/',
        }
      )
    );

    const userResposne = user.getUserData();

    return res.status(200).json({ token, userResposne });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signup,
  signin,
};
