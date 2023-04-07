const http = require('http')
const { URL } = require('url')
const routes = require('./routes')

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(`http://localhost:3000${req.url}`)
    
    console.log(`Method: ${req.method} | Endpoint: ${req.url}`)

    const route = routes.find((routeObj) => routeObj.method === req.method && routeObj.endpoint === parsedUrl.pathname)

    if (route) {
        req.query = Object.fromEntries(parsedUrl.searchParams)
        route.handler(req, res)

    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })
        res.end(`Cannot ${req.method} ${req.url}`)
    }

    // if (req.url === '/users' && req.method === 'GET') {
    //     listUsers(req, res)
    // } 
    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // })
    // res.end('<h1>Welcome to live!</h1>')
})

server.listen(3000, () => console.log('🔥 server on fire 🔥'))