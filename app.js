const express = require('express');
const app = express();
const userModel = require('./user');
const bodyParser = require('body-parser');

app.use(bodyParser.json([]))

app.post('/user', async (req, res, next) => {
    let userDetails = req.body;
    let response = await userModel.insertMany(userDetails);
    res.json(response);
})

module.exports = app