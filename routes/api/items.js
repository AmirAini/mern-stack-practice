const express = require('express');
const router = express.Router();

//Item model (queries to get the API)
const Item = require("../../models/Item");

// @route GET api/items
// @desc Get All Items
// @access Public

router.get('/',(req,res) => {
    //get all items from db
    Item.find()
    .sort({ date: -1}) //sort desc
    .then(items => res.json(items));
});

module.exports = router;