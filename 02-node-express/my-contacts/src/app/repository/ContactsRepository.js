const { v4 } = require('uuid')

const db = require('../../database/index.js')

let contacts = [
  {
    id: v4(),
    name: 'John',
    email: 'john@example.com',
    phone: '123123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@example.com',
    phone: 'aggwehgwhgwea',
    category_id: v4(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts)
    })
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      resolve(
        contacts.find(contact => contact.id === id)
      )
    })
  }

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      resolve(
        contacts.find(contact => contact.email === email)
      )
    })
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      resolve(
        contacts = contacts.filter(contact => contact.id !== id)
      )
    })
  }

  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id])

    return row
  }

  updateContact(id, { name, email, phone, category_id }) {
    return new Promise((resolve, reject) => {
      const contactUpdate = {
        id: id,
        name: name,
        email: email,
        phone: phone,
        category_id: category_id
      }

      contacts = contacts.map(contact => contact.id === id ? contactUpdate : contact)
      resolve(contactUpdate)
    })
  }
}

module.exports = new ContactsRepository()