const http = require('http')
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
})

server.listen(3000, () => console.log('🔥 server on fire 🔥'))