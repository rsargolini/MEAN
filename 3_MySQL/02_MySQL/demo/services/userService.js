var UserService = {};

var dbConn = require('./../inc/db_connection');
var dbQuery = require('./../inc/db_queries');

UserService.postUserLogin = (req, res) => {
    dbConn.getDbConnection(dbQuery.postUserLogin, req, res);
};

module.exports = UserService;