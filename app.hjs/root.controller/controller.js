'use strict';

var TheController = function () {
    var publicAPI = {
        index: index,
        home: home
    };

    return publicAPI;


    function index(req, res) {
        res.render('index', {
            title: 'Express'
        });
    }

    function home(req, res) {
        res.json('dsdsds');
    }
};

module.exports = new TheController();