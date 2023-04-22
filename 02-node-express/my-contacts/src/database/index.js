const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
})

client.connect()

client.query('SELECT * FROM mycontacts').then(result => console.log(result))