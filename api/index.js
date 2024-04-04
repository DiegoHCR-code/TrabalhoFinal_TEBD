const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err))
app.listen("5000", () => {
    console.log('====================================');
    console.log('backend running');
    console.log('====================================');
})