const express = require("express");
const iplocation = require("iplocation").default;

const ApiError = require("../models/constants/ApiError");
const ApiResponse = require("../models/constants/ApiResponse");
const ErrorTypes = require("../models/constants/ErrorTypes");
const config = require("../../config.json");
const router = express.Router();

const controller = require("../controllers/shops.controller");
const authUitls = require("../utils/auth.utils");

router.get("/shops", async (req, res) => {
  try {
    let { like, dislike, location } = req.query;
    const token = authUitls.getToken(req.headers);
    console.log(JSON.stringify(req.headers["authorization"]));

    if (!location && config.AUTO) {
      let geo = await iplocation(req.connection.remoteAddress);
      location = `${geo.latitude},${geo.longitude}`;
    }
    return res.json(ApiResponse(await controller.getShops(token)));
  } catch (error) {
    res.json(ApiResponse(null, error));
  }
});

router.patch("/shops/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { mode } = req.body;
    const token = authUitls.getToken(req.headers);
    if (!id || !token) {
      throw ApiError(ErrorTypes.FORBIDDEN, "No user login to update");
    }

    return res.json(ApiResponse(await controller.updateShop(token, id, mode)));
  } catch (error) {
    res.json(ApiResponse(null, error));
  }
});

module.exports = router;
