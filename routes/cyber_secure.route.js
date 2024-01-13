const router = require('express').Router();
const cyberCrimeInfo = require('../controllers/cyberTrends.controller');
const complaintRegister = require('../controllers/cyberSecure.controller');
const Token = require('../middlewares/token.middleware');
const upload = require("../middlewares/multer.middleware");

router.get('/cyberCrimeCategories', cyberCrimeInfo.cyberCrimeCategories )
router.get('/cyberTrends', cyberCrimeInfo.cyberTrends) ; 
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
router.post('/importantDocuments', Token.verifyAccessToken, upload.single("importantDocuments"), complaintRegister.importantDocuments); 


module.exports = router ;