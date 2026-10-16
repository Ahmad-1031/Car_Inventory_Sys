const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/auth');
const ctrlContent = require('../controllers/content');


//Users
router
    .route('/users')
    .post(ctrlUser.userCreateOne)

router
    .route('/users/:userid')
    .get(ctrlUser.userReadOne)
    .put(ctrlUser.userUpdateOne)
    .delete(ctrlUser.userDeleteOne);


// inventory
router
    .route('/content')
    .get(ctrlContent.contentList)
    .post(ctrlContent.contentCreateOne);

router
    .route('/content/:contentid')
    .get(ctrlContent.contentReadOne)
    .put(ctrlContent.contentUpdateOne)
    .delete(ctrlContent.contentDeleteOne);

module.exports = router;


