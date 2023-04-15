const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('🔥 Welcome to my API 🔥')
})

app.listen(3000, () => console.log('🔥 Server on fire 🔥 at http://localhost:3000'))