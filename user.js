const mongoose = require('mongoose');


const user = new mongoose.Schema({
    "id": { type: Number, required: true },
    "first_name": { type: String, required: true },
    "last_name": { type: String, required: true },
    "email": { type: String, required: true },
    "gender": { type: String, required: true },
    "ip_address": { type: String, required: true },
    "age": { type: Number, required: true }
});


module.exports = mongoose.model('user', user);