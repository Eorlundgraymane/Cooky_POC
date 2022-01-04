//Router Init
const express = require("express");
const router = express.Router();

//Home Route
const homeController = require("../controllers/homeController");
router.get("/",homeController.getIndex);

//Export Routes
module.exports = router;