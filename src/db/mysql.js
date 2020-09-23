const mysql = require('mysql');
const { MYSQL_CONF } = require('../config/db.js');

const con = mysql.createConnection(MYSQL_CONF)