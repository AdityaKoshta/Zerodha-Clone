require("dotenv").config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  try {
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: 3 * 24 * 60 * 60,
      });
  } catch(err) {
    console.log(err);
  }
};
