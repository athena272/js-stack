const { listUsers, getUserById, createUser } = require('./controllers/userController.js')

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
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: createUser
    },
]