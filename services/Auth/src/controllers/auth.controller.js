const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const { errorHadnler } = require("../utils/error");
const cookie = require('cookie'); // Import the 'cookie' library

async function signup(req, res) {
  try {
    const { name, email, password } = req.body;
    
    //Check if input is as expected or not
    if (!name || !password || !email) {
      res.json (errorHadnler(401,'All fields must be filled'))
      return
    }
    
    let user = await User.findOne({ email });

    console.log(user);

    // if user already exists;

    if (user) {
      res.json(errorHadnler(400, "user already exists"));
      return
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
    res.status(500).json({ ...error });
  }
}

async function signin(req, res, next) {
  try {
  const { email, password } = req.body;

  //Check if input is as expected or not
  if (!email || !password) {
    res.json (errorHadnler(401,'All fields must be filled'))
    return
  }

    let user = await User.findOne({ email });
    // console.log(user);

    // checking whether user exists or not;

    if (!user) {
      res.json(errorHadnler(404, "User does not exists"));
      return
    }

    const isMatch = await bcrypt.compare(password, user.password);

    // if the password not matched;

    if (!isMatch) {
      res.json(errorHadnler(401, "Invalid password"));
      return
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
    console.log(error);
    res.status(500).json({ ...error });
  }
}

module.exports = {
  signup,
  signin,
};
