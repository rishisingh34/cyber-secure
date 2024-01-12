const jwt = require("jsonwebtoken");
const {ACCESS_TOKEN_SECRET} = require('../config/env.config') ;

const auth = async (req, res, next) => {
  try {
    
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - Missing token" });
    }
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);   
    req.admin = decoded.aud;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

module.exports = auth;
