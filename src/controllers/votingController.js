const BaseController = require('./baseController');
const Forbidden = require('../errors/Forbidden');
const NotFound = require('../errors/NotFound');
const questionModel = require('../models/questionModel');
const { default: mongoose } = require('mongoose');

module.exports = class Basic extends BaseController {
    async upVoteQuestion(req, res) {
        try {
            return this.sendJSONResponse(
                res,
                "Up Voted Question Succesfully",
                {
                    length: 1
                },
                // user
            );
        } catch (error) {
            if (error instanceof NotFound) {
                console.log(error); // throw error;
            }
            return this.sendErrorResponse(req, res, error);
        }
    }

    async downVoteQuestion(req, res) {
        try {
            return this.sendJSONResponse(
                res,
                "Down Voted Question Succesfully",
                {
                    length: 1
                },
                // user
            );
        } catch (error) {
            if (error instanceof NotFound) {
                console.log(error); // throw error;
            }
            return this.sendErrorResponse(req, res, error);
        }
    }

    async upVoteAnswer(req, res) {
        try {
            return this.sendJSONResponse(
                res,
                "Up Voted Answer Succesfully",
                {
                    length: 1
                },
                // user
            );
        } catch (error) {
            if (error instanceof NotFound) {
                console.log(error); // throw error;
            }
            return this.sendErrorResponse(req, res, error);
        }
    }

    async downVoteAnswer(req, res) {
        try {
            return this.sendJSONResponse(
                res,
                "Down Voted Question Succesfully",
                {
                    length: 1
                },
                // user
            );
        } catch (error) {
            if (error instanceof NotFound) {
                console.log(error); // throw error;
            }
            return this.sendErrorResponse(req, res, error);
        }
    }
};