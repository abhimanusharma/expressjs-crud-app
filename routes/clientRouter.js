const express = require('express');
const router = express.Router();
var clientsController = require('../controllers/clientsController');

//get all
router.get('/', clientsController.fetch_all);

//post request to create a client
router.post('/', clientsController.create_post);

//get-one
router.get('/:id', clientsController.view_single);

//update
router.put('/:id', clientsController.update_single);

//delete
router.delete('/:id', clientsController.delete_single);


module.exports = router;
 
