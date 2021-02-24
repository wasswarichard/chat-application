const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'root',
    database: 'application',
    port: '5432'
});
module.exports = pool;
