const mongoose = require('mongoose')

const cryptoSchema = new mongoose.Schema({
    name: String,
    last: String,
    buy: String,
    sell: String,
    volume: String,
    base_unit: String,
});

const Crypto = mongoose.model('Crypto', cryptoSchema);
module.exports = Crypto;