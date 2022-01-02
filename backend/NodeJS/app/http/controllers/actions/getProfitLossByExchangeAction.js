const ProfitLoss = require('../../../infrastructure/models/profitLossModel');

exports.getProfitLossByExchange = (req, res, next) => {
    ProfitLoss.findOne({
        _id: req.params.id
    }).then(
        (thing) => {
            res.status(200).json(thing);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};