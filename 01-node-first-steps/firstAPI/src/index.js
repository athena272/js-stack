const http = require('http')
<<<<<<< HEAD

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end('<h1>Welcome to live!</h1>')
=======
const users = require('./mocks/users.js')

const server = http.createServer((req, res) => {
    console.log(`Method: ${req.method} | Endpoint: ${req.url}`)

    if (req.url === '/users' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(users))
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })
        res.end(`Cannot ${req.method} ${req.url}`)
    }

    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // })
    // res.end('<h1>Welcome to live!</h1>')
>>>>>>> feature-start-node/002-first-rout-api
})

server.listen(3000, () => console.log('🔥 server on fire 🔥'))