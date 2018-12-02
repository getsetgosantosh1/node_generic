'use strict';
const path = require('path');

const expressApp = require('./app.express');
const appEjs = require('./app.ejs');
const appHbs = require('./app.hbs');
const appHjs = require('./app.hjs');
const appHtml = require('./app.html');
const appPug = require('./app.pug');

// expressApp.init('ejs', path.join(__dirname, 'app.ejs', 'views'));
// expressApp.configRoutes(appEjs);

// expressApp.init('hbs', path.join(__dirname, 'app.hbs', 'views'));
// expressApp.configRoutes(appHbs);

// expressApp.init('hjs', path.join(__dirname, 'app.hjs', 'views'));
// expressApp.configRoutes(appHjs);

expressApp.init('html', path.join(__dirname, 'app.html', 'views'));
expressApp.configRoutes(appHtml);

// expressApp.init('pug', path.join(__dirname, 'app.pug', 'views'));
// expressApp.configRoutes(appPug);

expressApp.startServer();