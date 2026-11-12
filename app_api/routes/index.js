const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/auth');
const ctrlContent = require('../controllers/content');



//Login
router.post('/login',ctrlUser.userLogin);


//Inventory
router.get('/inventory',ctrlContent.inventoryPage);


//Users
router
    .route('/users')
    .post(ctrlUser.userCreateOne);

router
    .route('/users/:userid')
    .get(ctrlUser.userReadOne)
    .put(ctrlUser.userUpdateOne)
    .delete(ctrlUser.userDeleteOne);


// Content
router
    .route('/content')
    .post(ctrlContent.contentCreateOne);

router
    .route('/content/:contentid')
    .get(ctrlContent.contentReadOne)
    .put(ctrlContent.contentUpdateOne)
    .delete(ctrlContent.contentDeleteOne);

module.exports = router;


