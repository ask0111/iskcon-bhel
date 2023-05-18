const schema = require('./schema');
const mongoose = require('mongoose');


const Collection = new mongoose.model('collection', schema);

module.exports = Collection;
