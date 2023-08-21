const express = require("express");
const router = express.Router();
const voting_controller = require("../controllers/votingController");
const jwt_middleware = require('../middleware/jwtMiddleware');

const VotingClass = new voting_controller();

router.post("/upquestion", jwt_middleware, (req, res) => VotingClass.upVoteQuestion(req, res));
router.post("/downquestion", jwt_middleware, (req, res) => VotingClass.downVoteQuestion(req, res));
router.post("/upanswer", jwt_middleware, (req, res) => VotingClass.upVoteAnswer(req, res));
router.post("/downanswer", jwt_middleware, (req, res) => VotingClass.downVoteAnswer(req, res));

module.exports = router;