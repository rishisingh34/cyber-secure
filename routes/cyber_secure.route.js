const router = require('express').Router();
const cyberTrends = require('../controllers/cyberTrends.controller');
const complaintRegister = require('../controllers/cyberSecure.controller');

router.get('/cyberTrends', cyberTrends) ; 
router.post('/incidentDetails', complaintRegister.incidentDetails) ;

module.exports = router ;