const mongoose = require("mongoose");

const complaintStatusSchema = new mongoose.Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId ,
    ref : 'User' ,
    required : true ,
  }, 
  acknowledgementNumber: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfComplaint: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
  },
  subcategory: {
    type: String,
  },
  additionalInfo: {
    type: String,
  },
  complainantDetails: {
    name: String,
    address: String,
    contact: String,
  },

  policeVerification: {
    verified: {
      type: Boolean,
      default: false,
    },
    dismissed: {
      type: Boolean,
      default: false,
    },
    dismissalReason: String,
    verificationDateTime: Date,
    verifyingOfficer: String,
  },

  actionTaken: {
    status: {
      type: String,
      enum: ["Pending", "Sent to Bank", "Resolved"],
      default: "Pending",
    },
    bankNotification: {
      sent: {
        type: Boolean,
        default: false,
      },
      dateTimeSentToBank: Date,
    },
    bankDetails: {
      name: String,
      address: String,
      contact: String,
    },
  },

  timeline: [
    {
      timestamp: {
        type: Date,
        default: Date.now,
      },
      action: String,
      details: String,
    },
  ],
  nextSteps: {
    userInstructions: String,
    resolutionTimeframe: String,
  },
});

const ComplaintStatus = mongoose.model(
  "ComplaintStatus",
  complaintStatusSchema
);

module.exports = ComplaintStatus;
