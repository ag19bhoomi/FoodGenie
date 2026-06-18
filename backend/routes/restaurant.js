const express = require("express");
const router = express.Router();
const {getAllRestaurant,getRestaurant} = require("../controllers/restaurantController")

router.route("/").get(getAllRestaurant)
router.route("/:storeId").get(getRestaurant)

module.exports = router;