const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId ,
    ref : 'User' ,
    required : true ,
  },
  acknowledgementNumber : {
    type : String ,
    required : true ,
  },
  category : {
    type : String ,
  }, 
  subcategory: {
    type : String ,
  }, 
  date : {
    type : String ,
  } ,
  time : {
    type : String ,
  },
  delayReason : {
    type : String ,
  },
  additionalInfo : {
    type : String ,
  },
  name : {
    type : String ,
  },
  gender : {
    type : String , 
  },
  houseNo : {
    type : String ,
  },
  country : {
    type : String ,
  },
  streetName : {
    type : String ,
  },
  state : {
    type : String ,
  },
  district : {
    type : String ,
  },
  nearestPoliceStation : {
    type : String ,
  }, 
  nationalIdImageUrl : {
    type : String 
  },
  importantDocumentsUrl : [{
    type : String ,    
  }],
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

module.exports = mongoose.model('Complaint', complaintSchema) ;