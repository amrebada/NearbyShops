const express = require("express");
const ApiError = require("../models/constants/ApiError");
const ApiResponse = require("../models/constants/ApiResponse");
const ErrorTypes = require("../models/constants/ErrorTypes");
const router = express.Router();

const controller = require("../controllers/auth.controller");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw ApiError(ErrorTypes.BAD_REQUEST, "email or password not passed");
    }

    const token = await controller.login(email, password);

    return res.json(ApiResponse(token));
  } catch (error) {
    res.json(ApiResponse(null, error));
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { email, password, cpassword } = req.body;

    if (!email || !password || !cpassword) {
      throw ApiError(
        ErrorTypes.BAD_REQUEST,
        "email , password or cpassword params not found"
      );
    }
    const token = await controller.signUp(email, password, cpassword);
    return res.json(ApiResponse(token));
  } catch (error) {
    res.json(ApiResponse(null, error));
  }
});

module.exports = router;
