const BaseController = require('./baseController');
const Forbidden = require('../errors/Forbidden');
const NotFound = require('../errors/NotFound');
const question_model = require('../models/questionModel');
const { default: mongoose } = require('mongoose');

module.exports = class Basic extends BaseController {

    async createQuestion(req, res) {
        try {
            const { title, content } = req.body;

            const token = req.userData;

            const question = new question_model({
                title,
                content,
                author: token.userId
            });

            await question.save();

            return this.sendJSONResponse(
                res,
                "Question Created Succesfully",
                {
                    length: 1
                },
                question
            );
        } catch (error) {
            if (error instanceof NotFound) {
                console.log(error); // throw error;
            }
            return this.sendErrorResponse(req, res, error);
        }
    }

    async updateQuestion(req, res) {
        try {
            const token = req.userData;
            const question_id = req.query._id;

            const question = await question_model.findById(question_id);

            let result;

            if (question?.author == token.userId) {
                const updated_question = req.body;
                result = await question.updateOne(updated_question, { new: true });
            } else {
                throw new Forbidden('You can not update this question');
            }

            return this.sendJSONResponse(
                res,
                "Question Updated Succesfully",
                {
                    length: 1
                },
                result
            );
        } catch (error) {
            if (error instanceof NotFound) {
                console.log(error); // throw error;
            }
            return this.sendErrorResponse(req, res, error);
        }
    }

    async deleteQuestion(req, res) {
        try {
            const token = req.userData;
            const question_id = req.query._id;

            const question = await question_model.findById(question_id);

            let result;

            if (question?.author == token.userId) {
                result = await question.deleteOne();
            } else {
                throw new Forbidden('You can not delete this question');
            }

            return this.sendJSONResponse(
                res,
                "Question Deleted Succesfully",
                {
                    length: 1
                },
                result
            );

        } catch (error) {
            if (error instanceof NotFound) {
                console.log(error); // throw error;
            }
            return this.sendErrorResponse(req, res, error);
        }
    }

    async getAllQuestion(req, res) {
        try {

            const result = await question_model.find();

            return this.sendJSONResponse(
                res,
                "Question List",
                {
                    length: 1
                },
                result
            );
        } catch (error) {
            if (error instanceof NotFound) {
                console.log(error); // throw error;
            }
            return this.sendErrorResponse(req, res, error);
        }
    }

    async getAuthorQuestionOnly(req, res) {
        try {

            const token = req.userData;

            const result = await question_model.find({author : token.userId});

            return this.sendJSONResponse(
                res,
                "Your Question List",
                {
                    length: 1
                },
                result
            );
        } catch (error) {
            if (error instanceof NotFound) {
                console.log(error); // throw error;
            }
            return this.sendErrorResponse(req, res, error);
        }
    }
};