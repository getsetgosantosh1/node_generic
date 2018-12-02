'use strict';

var TheController = function () {
    const path = require('path');

    var publicAPI = {
        index: index
    };

    return publicAPI;

    function _getHtml(htmlName) {
        return path.join(__dirname + '/../views/' + htmlName);
    }

    function index(req, res) {
        res.sendFile(_getHtml('index.html'));
    }
};

module.exports = new TheController();