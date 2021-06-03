const express = require('express')
const path = require('path')
const logger = require('morgan')

require('./config/db.config');

const app = express()

/**
 * Middlewares
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

/**
 * View setup
 */
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

/**
 * Router
 */
const router = require('./config/routes.config');
app.use('/', router);

const port = 3000;
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});