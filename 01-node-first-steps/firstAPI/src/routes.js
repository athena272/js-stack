const { listUsers, getUserById } = require('./controllers/userController.js')

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: listUsers
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: getUserById
    }
]