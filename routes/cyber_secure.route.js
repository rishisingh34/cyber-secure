const router = require('express').Router();
const cyberTrends = require('../controllers/cyberTrends.controller');
const complaintRegister = require('../controllers/cyberSecure.controller');
const Token = require('../middlewares/token.middleware');
const upload = require("../middlewares/multer.middleware");

router.get('/cyberTrends', cyberTrends) ; 
router.post('/incidentDetails', Token.verifyAccessToken,  complaintRegister.incidentDetails) ;
router.post(
  "/complainantId",
  Token.verifyAccessToken,
  upload.single("nationalIdCard"),
  complaintRegister.complainantId
);
router.post(
  "/complainantDetails",
  Token.verifyAccessToken,
  complaintRegister.complainantDetails
);


module.exports = router ;