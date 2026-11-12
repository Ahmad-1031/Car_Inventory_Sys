const express = require('express');
const router = express.Router();

const ctrlOthers = require('../controllers/others');

const ctrlContent = require('../controllers/content')


router.get('/',ctrlOthers.home)
router.get('/login',ctrlOthers.login)
router.get('/register',ctrlOthers.register)

router.get('/inventory',ctrlContent.inventory)
router.get('/inventory/:id',ctrlContent.content)

module.exports = router;

