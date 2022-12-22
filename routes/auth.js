const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register

router.post("/register", async (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
    admin: req.body.admin,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("No user found with this username");
    if (user) {
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASSWORD_SECRET
      );
      const pass = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (pass != req.body.password) {
        res.status(401).json("Wrong credentials");
      } else {
        const accessToken = await jwt.sign(
          {
            id: user._id,
            isAdmin: user.admin,
          },
          process.env.JWT_SECRET,
          { expiresIn: "3d" }
        );
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
