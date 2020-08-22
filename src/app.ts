const express = require('express');
const mongoose = require('mongoose');


const app = express();


const MONGODB_URI = `mongodb+srv://chase-collins:6NvArN8rJxta6b7@todo.fj6sr.mongodb.net/Todo?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI || 'mongodb://localhost/mern_youtube', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});