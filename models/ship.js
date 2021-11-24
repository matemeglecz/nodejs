const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Ship = db.model('Ship', {
    name: String,
    lastport: String,
    cannons: Number    
});

module.exports = Ship;