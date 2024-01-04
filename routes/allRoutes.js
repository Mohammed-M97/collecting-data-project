const express = require('express');
const router = express.Router();
const User = require("../models/customerSchema");
const userControl = require("../controllers/userController");

// GET requst
router.get("/", userControl.user_index_get);

router.get('/user/add.html', userControl.user_add_get)

router.get('/edit/:id', userControl.user_edit_get)

router.get("/view/:id", userControl.user_view_get);

router.get('/user/search.html', userControl.user_search_get);

// PUT requst
router.put("/edit/:id", userControl.user_put); 

// DELETE requst
router.delete("/edit/:id", userControl.user_delete); 

// POST requst
router.post('/user/add.html', userControl.user_add_post)

router.post('/search', userControl.user_search_post)

module.exports = router