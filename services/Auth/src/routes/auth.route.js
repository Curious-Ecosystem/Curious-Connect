const express = require("express");

const router = express.Router();
const { signup, signin } = require("../controllers/auth.controller");

// auth routes...;

router.post("/sign-up", signup);

router.post("/sign-in", signin);

module.exports = router;
