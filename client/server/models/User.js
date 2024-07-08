const mongoose = require('mongoose');
const { type } = require('os');
const { string } = require('prop-types');

const userSchema = new mongoose.Schema({
    name: { type: string, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

});
module.exports = mongoose.model('User', userSchema);