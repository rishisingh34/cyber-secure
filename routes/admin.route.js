const router = require('express').Router();
const admin = require('../controllers/admin.controller');

router.post('/login', admin.login); 
router.post('/verifyOtp', admin.verifyOtp);

module.exports = router;
