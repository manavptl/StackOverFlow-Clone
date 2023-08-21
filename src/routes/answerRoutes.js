const express = require("express");
const router = express.Router();
const answer_controller = require("../controllers/answerController");
const jwt_middleware = require('../middleware/jwtMiddleware');

const AnswerClass = new answer_controller();

router.post("/", jwt_middleware, (req, res) => AnswerClass.createAnswer(req, res));
router.delete("/", jwt_middleware, (req, res) => AnswerClass.deleteAnswer(req, res));
router.put("/", jwt_middleware, (req, res) => AnswerClass.updateAnswer(req, res));

module.exports = router;