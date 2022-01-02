const CurrentBalance = require('../../../infrastructure/models/currentBalanceModel');

exports.getCurrentBalanceByExchange = (req, res, next) => {
    CurrentBalance.findOne({
        _id: req.params.id
    }).then(
        (currentBalance) => {
            res.status(200).json(currentBalance);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};