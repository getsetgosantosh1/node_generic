'use strict';

var AppRoutes = function () {
    const path = require('path');

    function configureRoutes(app) {
        require('./root.controller').init(app);
    }

    function init(app) {
        configureRoutes(app);
    }

    var publicAPI = {
        init: init
    };

    return publicAPI;
};

module.exports = new AppRoutes();