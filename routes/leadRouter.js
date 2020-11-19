const express = require('express');
const router = express.Router();
var leadsController = require('../controllers/leadsController');

//get all leads
router.get('/', leadsController.fetch_all);

//post request to create a lead
router.post('/', leadsController.create_post);

//get a lead
router.get('/:id', leadsController.view_single);

//update a lead
router.put('/:id', leadsController.update_single);

//delete a lead
router.delete('/delete/:id', leadsController.delete_single);


module.exports = router;
 
