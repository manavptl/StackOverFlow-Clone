const express = require("express");
const router = express.Router();
const base_controller = require("../controllers/userController");

const BaseClass = new base_controller();

router.get("/", (req, res) => BaseClass.base_url(req, res));
router.post("/login", (req, res) => BaseClass.login(req, res));
router.post("/register", (req, res) => BaseClass.register(req, res));

module.exports = router;