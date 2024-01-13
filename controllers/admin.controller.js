const Admin = require("../models/admin.model");
const Complaint = require("../models/complaint.model");
const Otp = require("../models/otp.model");
const { sendOtpMail } = require("../utils/mailer.util");
const Token = require("../middlewares/token.middleware");

const admin = {
  login: async (req, res) => {
    try {
      const { name, designation, identificationNumber, issuedDate } = req.body;

      const admin = await Admin.findOne({ identificationNumber });

      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }

      if (name != admin.name || designation != admin.designation) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const email = admin.email;

      const otp = Math.floor(1000 + Math.random() * 9000);
      const OTP = new Otp({
        email,
        otp,
      });

      await OTP.save();

      sendOtpMail(email, otp);

      res.status(201).json({ message: "Otp Sent successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  verifyOtp: async (req, res) => {
    try {
      const { email, otp } = req.body;

      const OTP = await Otp.findOne({ email });
      if (!OTP) {
        return res.status(404).json({ message: "User not found" });
      }
      if (OTP.otp != otp) {
        return res.status(400).json({ message: "OTP is incorrect" });
      }
      const admin = await Admin.findOne({ email });
      const accessToken = await Token.signAccessToken(admin.id);

      await OTP.deleteOne({ email });

      return res.status(200).json({
        message: "User verified successfully",
        accessToken: accessToken,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getComplaints: async (req, res) => {
    try {
      const complaints = await Complaint.find({});

      if (!complaints) {
        return res.status(404).json({ message: "Complaints not found" });
      }

      return res.status(200).json({ complaints: complaints });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = admin;