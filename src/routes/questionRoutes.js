const express = require("express");
const router = express.Router();
const question_controller = require("../controllers/questionController");
const jwt_middleware = require('../middleware/jwtMiddleware');

const QuestionClass = new question_controller();

router.get("/", (req, res) => QuestionClass.getAllQuestion(req, res));
router.get("/author", jwt_middleware, (req, res) => QuestionClass.getAuthorQuestionOnly(req, res));
router.post("/", jwt_middleware, (req, res) => QuestionClass.createQuestion(req, res));
router.delete("/", jwt_middleware, (req, res) => QuestionClass.deleteQuestion(req, res));
router.put("/", jwt_middleware, (req, res) => QuestionClass.updateQuestion(req, res));

module.exports = router;