const router = require('express').Router();
const cyberTrends = require('../controllers/cyberTrends.controller');
const complaintRegister = require('../controllers/cyberSecure.controller');
const Token = require('../middlewares/token.middleware');
// const cyberTrends2 = require('../controllers/cyberTrends2.controller');

router.get('/cyberTrends', cyberTrends) ; 
router.post('/incidentDetails', Token.verifyAccessToken,  complaintRegister.incidentDetails) ;


module.exports = router ;