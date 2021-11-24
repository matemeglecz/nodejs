const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/A7RBKU', { useNewUrlParser: true });

module.exports = mongoose;