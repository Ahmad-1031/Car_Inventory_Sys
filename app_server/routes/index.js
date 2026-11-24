const express = require('express');
const router = express.Router();


const ctrlPages = require('../controllers/pages');
const ctrlContent = require('../controllers/content')
const ctrlAuth = require('../controllers/auth');
const ctrlInventory = require('../controllers/inventory');
const authMiddleware = require('../../middleware/auth');
const csrfMiddleware = require('../../middleware/csrf');


//Page Routes Guests
router.get('/',ctrlPages.login)
router.get('/login',ctrlPages.login)
router.get('/register',ctrlPages.register)


//Login & logout
router.post('/login',csrfMiddleware.validateCsrfToken ,ctrlAuth.login);
router.post('/logout',csrfMiddleware.validateCsrfToken ,ctrlAuth.logout);


//Inventory Pages
router.get('/inventory',authMiddleware.requiredAuth,ctrlContent.inventory)


module.exports = router;

