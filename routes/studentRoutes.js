const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get('/fines/:rollNumber', studentController.getFines);
router.post('/initiateRequest/:rollNumber', studentController.initiateRequest);
router.post('/:studentRollNumber/:fineId/addPaymentProof', studentController.addPaymentProof);


module.exports = router;