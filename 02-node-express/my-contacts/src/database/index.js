const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
})

client.connect()
  .then(() => console.log('🔥 Connected to database 🔥'))
  .catch((err) => console.log('💀 Error connecting to database', err))

exports.query = async (query) => {
  const { rows } = client.query(query)
  return rows
}

// client.query('SELECT * FROM contacts').then(result => console.log(result))