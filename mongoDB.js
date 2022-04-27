const mongoose = require('mongoose');

class mongo{

    constructor() {
        this.createMongoConnection();
    }

    createMongoConnection() {

        mongoose.connect('mongodb://localhost:27017/assignments')
        mongoose.connection.once('open', () => {
            console.log("mongoDB is connected")
        })
        mongoose.connection.on('error', () => {
            console.log("Some error occured in mongoDB connection")
        })
    }
}

module.exports = mongo