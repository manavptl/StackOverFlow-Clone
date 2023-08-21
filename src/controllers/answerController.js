const BaseController = require('./baseController');
const Forbidden = require('../errors/Forbidden');
const NotFound = require('../errors/NotFound');
const Answer = require('../models/answerModel');
const { default: mongoose } = require('mongoose');

module.exports = class Basic extends BaseController {
    async createAnswer(req, res) {
        try {
            const { content, questionId } = req.body;

            const token = req.userData;

            const answer = new Answer({
                content,
                author: token.userId,
                question: new mongoose.Types.ObjectId(questionId)
            });

            await answer.save();

            return this.sendJSONResponse(
                res,
                "Answer Created Successfully",
                {
                    length: 1
                },
                answer
            );
        } catch (error) {
            return this.sendErrorResponse(req, res, error);
        }
    }

    async updateAnswer(req, res) {
        try {
            const token = req.userData;
            const answerId = req.query._id;

            const answer = await Answer.findById(answerId);

            if (answer?.author == token.userId) {
                const updatedAnswer = req.body;
                await answer.updateOne(updatedAnswer, { new: true });
                return this.sendJSONResponse(
                    res,
                    "Answer Updated Successfully",
                    {
                        length: 1
                    },
                    answer
                );
            } else {
                throw new Forbidden("You cannot update this answer");
            }
        } catch (error) {
            return this.sendErrorResponse(req, res, error);
        }
    }

    async deleteAnswer(req, res) {
        try {
            const token = req.userData;
            const answerId = req.query._id;

            const answer = await Answer.findById(answerId);

            if (answer?.author == token.userId) {
                await answer.deleteOne();
                return this.sendJSONResponse(
                    res,
                    "Answer Deleted Successfully",
                    {
                        length: 1
                    },
                    answer
                );
            } else {
                throw new Forbidden("You cannot delete this answer");
            }
        } catch (error) {
            return this.sendErrorResponse(req, res, error);
        }
    }
};