const mongoose = require('mongoose');

const currentBalanceSchema = mongoose.Schema({
    deposits: { type: Number, required: true },
    withdrawals: { type: Number, required: true },
    costs: { type: Number, required: true },
    profit_loss: { type: Number, required: true },
});

module.exports = mongoose.model('CurrentBalance', currentBalanceSchema);