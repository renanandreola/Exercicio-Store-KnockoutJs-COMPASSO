const {Schema} = require('mongoose');
module.exports = new Schema({
    name: String,
    message: String,
    email: String,
    date: String,
    subject: String,
    response: String,
});