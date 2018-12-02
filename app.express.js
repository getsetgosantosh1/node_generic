'use strict';

var AppExpressModule = function () {
    const http = require('http');
    const express = require('express');
    const path = require('path');
    const favicon = require('serve-favicon');
    const logger = require('morgan');
    const cookieParser = require('cookie-parser');
    const createError = require('http-errors');
    const config = require('./app.config');
    const app = express();

    var publicAPI = {
        init: init,
        configRoutes: configRoutes,
        startServer: startServer,
    };

    return publicAPI;

    function init(viewType, viewFolder) {
        // setup middle ware
        app.use(favicon(__dirname + '/public/favicon.ico'));
        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({
            extended: false
        }));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, 'public')));

        // setup views
        console.log('viewFolder', viewFolder);
        app.set('views', viewFolder);
        app.set('view engine', viewType);

        // // setup the errors
        // app.use(function (req, res, next) {
        //     next(createError(404));
        // });

        // // error handler
        // app.use(function (err, req, res, next) {
        //     res.locals.message = err.message;
        //     res.locals.error = req.app.get('env') === 'development' ? err : {};
        //     res.status(err.status || 500);
        //     res.render('error');
        // });

        return app;
    }

    function configRoutes(routesConfig) {
        routesConfig.init(app);
    }

    function startServer() {
        let server = http.createServer(app);
        server.listen(config.port, config.ip, function () {
            console.log('Server started on ' + config.port);
        });
    }
};

module.exports = new AppExpressModule();