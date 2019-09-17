/* NPM-PACKAGES */
import mysql from 'mysql'

const MYSQL_OPTIONS = {
    host: 'db-mysql',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    dateStrings: true
}

var connection = mysql.createConnection(MYSQL_OPTIONS)

/* EXPORT */
export default connection