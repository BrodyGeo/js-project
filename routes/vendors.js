// Our router module
const router = require('express').Router();

// Our controller
const VendorsController = require('../controllers/vendorsController');

// Our routes
router.get(`/`, VendorsController.index);
router.get(`/:id`, VendorsController.show);
router.post(`/`, VendorsController.create);
router.post(`/update`, VendorsController.update);
router.post(`/destroy`, VendorsController.destroy);

// We have to export our changes
module.exports = router;