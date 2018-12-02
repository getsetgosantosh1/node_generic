'use strict';
var ConfigModule = (function () {
    const path = require('path');

    let all = {
        env: process.env.NODE_ENV,
        port: process.env.PORT || 3002,
        ip: process.env.IP || '0.0.0.0',
        mongoUrl: 'mongodb://localhost:27017/mydb',
    };

    return all;
})();

module.exports = ConfigModule;