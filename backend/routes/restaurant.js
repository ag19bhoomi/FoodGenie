const express = require("express");
const router = express.Router();
const {getAllRestaurant} = require("../controllers/restaurantController")

router.route("/").get(getAllRestaurant)


module.exports = router;