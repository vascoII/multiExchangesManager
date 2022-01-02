const CurrentBalance = require('../../../infrastructure/models/currentBalanceModel');

exports.getCurrentBalance = (req, res, next) => {
    CurrentBalance.find().then(
        (things) => {
            res.status(200).json(things);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};