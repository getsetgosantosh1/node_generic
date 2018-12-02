'use strict';
var ControllerManagerModule = function () {
    const ctrl = require('./controller');

    var publicAPI = {
        init: init
    };

    return publicAPI;

    function init(app) {
        app.route('/').get(ctrl.index);
    }
};

module.exports = new ControllerManagerModule();