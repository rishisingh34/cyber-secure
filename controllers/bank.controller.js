const Complaint = require('../models/complaint.model');

const bankController = {
  freeze: async (req, res) => {
    try {
      const { acknowledgementNumber } = req.query;
      await Complaint.findOneAndUpdate(
        { acknowledgementNumber },
        { verificationStatus: true }
      );
      return res.render("<center><h1>Account Freezed</h1></center>");
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  denyComplaint: async (req, res) => {
    try {
      const { acknowledgementNumber } = req.query;
      await Complaint.findOneAndUpdate(
        { acknowledgementNumber },
        {  dismissalStatus: true }
      );

      return res.render("<center><h1>Complaint Denied</h1></center>");
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
module.exports = bankController;