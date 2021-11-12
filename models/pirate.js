const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Pirate = db.model('Pirate', {
    name: String,
    parrots: Number,
    lostteeth: Number,
    _ship: {
        type: Schema.Types.ObjectId,
        ref: 'Ship'
    }
});

module.exports = Pirate;