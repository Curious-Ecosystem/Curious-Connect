const express = require("express");

const router = express.Router();
const { signup, signin } = require("../controllers/auth.controller");
const validate = require("../middleware/validate.schema");
const { RegisterSchema, SigninSchema } = require("../validation/zodschema");
// auth routes...;

router.post("/sign-up",validate(RegisterSchema), signup);
router.post("/sign-in",validate(SigninSchema), signin);

module.exports = router;
