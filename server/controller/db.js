'use strict';


module.exports = function (sqlserver, mailer) {

    return {
        getView: function (req, res, next) {
            res.send('ok');
        }
    }
};