const BaseController = require('./baseController');
const Forbidden = require('../errors/Forbidden');
const NotFound = require('../errors/NotFound');
const questionModel = require('../models/questionModel');
const answerModel = require('../models/answerModel'); // Import the Answer model
const UserModel = require('../models/userModel'); // Import the User model
const { default: mongoose } = require('mongoose');

module.exports = class Basic extends BaseController {
    async upVoteQuestion(req, res) {
        try {
            const token = req.userData;
            const questionId = req.params.questionId;

            const question = await questionModel.findById(questionId);

            if (!question) {
                throw new NotFound('Question not found');
            }

            question.upvotes.push(token.userId);
            await question.save();

            return this.sendJSONResponse(
                res,
                "Up Voted Question Successfully",
                {
                    length: 1
                },
                question
            );
        } catch (error) {
            return this.sendErrorResponse(req, res, error);
        }
    }

    async downVoteQuestion(req, res) {
        try {
            const token = req.userData;
            const questionId = req.params.questionId;

            const question = await questionModel.findById(questionId);

            if (!question) {
                throw new NotFound('Question not found');
            }

            question.downvotes.push(token.userId);
            await question.save();

            return this.sendJSONResponse(
                res,
                "Down Voted Question Successfully",
                {
                    length: 1
                },
                question
            );
        } catch (error) {
            return this.sendErrorResponse(req, res, error);
        }
    }

    async upVoteAnswer(req, res) {
        try {
            const token = req.userData;
            const answerId = req.params.answerId;

            const answer = await answerModel.findById(answerId);

            if (!answer) {
                throw new NotFound('Answer not found');
            }

            answer.upvotes.push(token.userId);
            await answer.save();

            return this.sendJSONResponse(
                res,
                "Up Voted Answer Successfully",
                {
                    length: 1
                },
                answer
            );
        } catch (error) {
            return this.sendErrorResponse(req, res, error);
        }
    }

    async downVoteAnswer(req, res) {
        try {
            const token = req.userData;
            const answerId = req.params.answerId;

            const answer = await answerModel.findById(answerId);

            if (!answer) {
                throw new NotFound('Answer not found');
            }

            answer.downvotes.push(token.userId);
            await answer.save();

            return this.sendJSONResponse(
                res,
                "Down Voted Answer Successfully",
                {
                    length: 1
                },
                answer
            );
        } catch (error) {
            return this.sendErrorResponse(req, res, error);
        }
    }
};
