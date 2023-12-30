const Complaint = require('../models/complaint.model');
const crypto = require('crypto');

const complaintRegister = {
  incidentDetails : async (req, res) => {
    try {
      const { category , subcategory , date , time , delayReason , additionalInfo } = req.body;

      const acknowledgementNumber = crypto.randomBytes(20).toString("hex");

      const complaintData = new Complaint({
        acknowledgementNumber ,
        category ,
        subcategory ,
        date ,
        time ,
        delayReason ,
        additionalInfo ,
      });
      await complaintData.save();
      res.status(201).json({ message: "Complaint Registered successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = complaintRegister;