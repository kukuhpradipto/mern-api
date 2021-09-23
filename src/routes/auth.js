const express = require("express");

const router = express.Router();
const authControllers = require("../controllers/authControlers");

router.post("/register", authControllers.register);

module.exports = router;
