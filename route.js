const { Router } = require("express");
const express = require("express");
const router = express.Router();
const{
    getDat,
    getData,
    postData,
    putData,
    deleteData
} = require("../olaexpress/control")

router.route('/').get(getDat)
router.route('/').post(postData)

router.route('/:id').get(getData)
router.route('/:id').put(putData)
router.route('/:id').delete(deleteData)

module.exports = router