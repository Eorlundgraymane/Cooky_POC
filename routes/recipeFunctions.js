//Router Init
const express = require("express");
const router = express.Router();

//Home Route
const createController = require("../controllers/createController");
const followController = require("../controllers/followController");

router.get("/recipe/create",createController.getIndex);
router.post("/recipe/create",createController.postRecipe);
router.get("/recipe/follow/:id",followController.getRecipe);
router.get("/recipe/follow",followController.getIndex);

//Export Routes
module.exports = router;