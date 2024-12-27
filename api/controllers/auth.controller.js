import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 12);

  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword
  });

  try {
    await newUser.save();
    res.json("Signup successful");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const {userid, password} = req.body;

  if(
    !userid ||
    !password ||
    userid === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({
      $or: [{ username: userid }, { email: userid }],
    });
    
    if (!validUser || !bcryptjs.compareSync(password, validUser.password)) {
      return next(errorHandler(401, "Incorrect username or password"));
    }
    
    const token = jwt.sign({id:validUser._id}, process.env.JWT_SecretKey, {expiresIn: '1d'});

    const {password: pass, ...rest} = validUser._doc;


    res.status(200).cookie('access_token', token, {
      httpOnly: true
    }).json(rest);


  } catch(error) {
    next(error);
  }

}
