//Router Init
const express = require("express");
const router = express.Router();

//Error Controller
const errorController = require("../controllers/errorController");
router.get("/*",errorController.get404);

//Export Routes
module.exports = router;