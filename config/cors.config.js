const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

const handleCors = cors(corsOptions);

module.exports = handleCors;
