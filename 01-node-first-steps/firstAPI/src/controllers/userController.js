const users = require('../mocks/users.js')

function listUsers(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(users)) 
}

module.exports = { listUsers }