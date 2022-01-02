const mongoose = require('mongoose');

const profitLossSchema = mongoose.Schema({
    total: { type: Number, required: true },
    unRealized: { type: Number, required: true },
    realized: { type: Number, required: true },
    costs: { type: Number, required: true },
});

module.exports = mongoose.model('ProfitLoss', profitLossSchema);