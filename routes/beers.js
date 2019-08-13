// Our router module
const router = require('express').Router();

// Our controller
const BeersController = require('../controllers/beersController');

// Our routes
router.get(`/`, BeersController.index);
router.get(`/:id`, BeersController.show);
router.post(`/`, BeersController.create);
router.post(`/update`, BeersController.update);
router.post(`/destroy`, BeersController.destroy);

// We have to export our changes
module.exports = router;