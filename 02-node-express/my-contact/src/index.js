const express = require('express')
const routes = require('./routes')

const app = express();

app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log('🔥 Server on fire 🔥 at http://localhost:3000'))
