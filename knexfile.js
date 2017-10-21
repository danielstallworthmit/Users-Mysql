const config = require('./config');

module.exports = {
    client: 'mysql',
    connection: {
        user: 'daniel',
        password: config.secret,
        database: 'tests'
    }
}