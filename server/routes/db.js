'use_strict';

var express = require('express');

module.exports = function (app,dbController) {


    function init() {

        var router = express.Router();
        router.get('/getView', dbController.getView);
        app.use('/api/db', router);

    }

    return {
        init:init
    }

}
