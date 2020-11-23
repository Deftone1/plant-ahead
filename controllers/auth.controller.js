const db = require("../models");
const jwt = require("jsonwebtoken");

const createToken = (user) => {
  const ONE_HOUR = 3600;
  const payload = {
    id: user.id,
    username: user.username,
    exp: Math.floor(Date.now() / 1000) + ONE_HOUR,
  };
  return jwt.sign(payload, process.env.SERVER_SECRET);
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.User.findOne({ username });
    const isPasswordCorrect = await user.comparePassword(password);

    if (isPasswordCorrect) {
      const token = createToken(user);
      res.json({ token, id: user._id, profile: user.profile });
    } else {
      res.status(401).end();
    }
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
};

const signup = (req, res) => {
  const { username, password } = req.body;
  const user = new db.User({ username, password, profile:"I love the outdoors and nature. I currently live in California and enjoy landscaping in my spare time." });
  return user
    .save()
    .then(() => {
      res.json({
        token: createToken(user),
        id: user._id,
      });
    })
    .catch((error) => {
      res.status(400).end();
    });
};

module.exports = { login, signup };
