const users = require('../mocks/users.js')

function listUsers(req, res) {
    const { order } = req.query
    const usersSorted = users.sort((a, b) => {
        if (order === 'desc') {
            return a.id < b.id ? 1 : -1
        }

        return a.id > b.id ? 1 : -1
    })

    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(users))
}

module.exports = { listUsers }