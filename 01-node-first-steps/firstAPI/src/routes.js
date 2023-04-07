const { listUsers } = require('./controllers/userController.js')

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: listUsers
    }
]