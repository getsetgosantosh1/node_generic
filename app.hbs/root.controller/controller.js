'use strict';

var TheController = function () {
    var publicAPI = {
        index: index
    };

    return publicAPI;


    function index(req, res) {
        res.render('index', {
            title: 'Express'
        });
    }
};

module.exports = new TheController();