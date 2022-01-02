const ProfitLoss = require('../../../infrastructure/models/profitLossModel');

exports.getProfitLoss = (req, res, next) => {
    ProfitLoss.find().then(
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