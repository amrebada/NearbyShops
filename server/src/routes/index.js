const express = require("express");
const router = express.Router();

const auth = require("./auth.route");
const shops = require("./shops.route");

router.use(auth);
router.use(shops);

module.exports = router;
