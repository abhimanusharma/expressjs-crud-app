const express = require('express');
const router = express.Router();
var salesController = require('../controllers/salesController');

//get all
router.get('/', salesController.fetch_all);

//post request to create a client
router.post('/', salesController.create_post);

//get-one
router.get('/:id', salesController.view_single);

//update
router.put('/:id', salesController.update_single);

//delete
router.delete('/:id', salesController.delete_single);


module.exports = router;
 
