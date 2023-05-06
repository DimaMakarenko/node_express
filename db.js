const Pool = require('pg').Pool;
const pool = new Pool({
  user: '',
  password: '',
  host: '',
  port: 1,
  database: ''
});



module.exports = pool;
