const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));

app.listen('3000', () => console.log('Listening on port 3000'));

app.use(express.static(path.join(__dirname, './frontend/App.css')));
app.use(express.static(path.join(__dirname, './frontend/bundle')));

//////////
// YOUR CODE HERE:
//////////
app.use('/api/posts', require('./routes/index').postsRouter);

// CATCHALL
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/index.html'));
});