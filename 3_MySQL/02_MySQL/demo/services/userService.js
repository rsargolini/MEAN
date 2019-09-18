var UserService = {};

var dbConn = require('./../inc/db_connection');
var dbQuery = require('./../inc/db_queries');

UserService.postUserLogin = (req, res) => {
    var userName = req.body.user_name;
    var userPassword = req.body.user_password;
    var userEmail = req.body.user_email;
    dbConn.getDbConnection(dbQuery.postUserLogin, req, res);
};

module.exports = UserService;