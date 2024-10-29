const {ACCESS_TOKEN_SECRET} = require('../config/env.config');
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const Token = {
  signAccessToken: (id) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: "10d",
        issuer: "CyberSecure",
        audience: id,
      };
      jwt.sign(payload, secret, options, (err, token) => {
        if (err) reject(err);
        resolve(token);
      });
    });
  },
  verifyAccessToken: async (req, res, next) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
      req.user = {id : null }; 
      req.user.id =decoded.aud; 
      next();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = Token;
