const http = require('http')
const url = require('url')
const routes = require('./routes')
const { bodyParser } = require('./helpers/bodyParser.js')

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    console.log(`Method: ${req.method} | Endpoint: ${req.url}`)

    let { pathname } = parsedUrl
    let id = null

    // const spliteEndpoint = pathname.split('/').filter((routerItem) => Boolean(routerItem))
    const spliteEndpoint = pathname.split('/').filter(Boolean)

    if (spliteEndpoint.length > 1) {
        pathname = `/${spliteEndpoint[0]}/:id`
        id = spliteEndpoint[1]
        console.log(pathname)
    }

    const route = routes.find((routeObj) => routeObj.method === req.method && routeObj.endpoint === pathname)

    if (route) {
        req.query = parsedUrl.query
        req.params = { id }

        res.send = (statusCode, body) => {
            res.writeHead(statusCode, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(body))
        }

        if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
            bodyParser(req, () => route.handler(req, res))

        } else {
            route.handler(req, res)

        }
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