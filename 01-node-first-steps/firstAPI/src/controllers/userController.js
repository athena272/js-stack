let users = require('../mocks/users.js')

function listUsers(req, res) {
    const { order } = req.query
    const usersSorted = users.sort((a, b) => {
        if (order === 'desc') {
            return a.id < b.id ? 1 : -1
        }

        return a.id > b.id ? 1 : -1
    })

    res.send(200, usersSorted)
}

function getUserById(req, res) {
    const { id } = req.params
    const user = users.find((user) => user.id === Number(id))

    if (!user) {
        return res.send(404, { erroMessage: 'User not found' })
    }

    res.send(200, user)
}

function createUser(req, res) {
    const { body } = req

    const lastUserId = users[users.length - 1].id
    const newUser = {
        id: lastUserId + 1,
        name: body.name
    }

    users.push(newUser)

    res.send(200, newUser)
}

function updateUser(req, res) {
    const { id } = req.params
    const { name } = req.body

    const userExists = users.find((user) => user.id === Number(id))

    if (!userExists) {
        return res.send(400, { erroMessage: 'User not found' })
    }

    users = users.map((user) => {
        if (user.id === Number(id)) {
            return ({
                ...user,
                name: name
            })
        }

        return user
    })

    res.send(200, { id: Number(id), name })
}

function deleteUser(req, res) {
    const { id } = req.params

    users = users.filter((user) => user.id !== Number(id))
    res.send(200, { userDelete: true })
}

module.exports = { listUsers, getUserById, createUser, updateUser, deleteUser }