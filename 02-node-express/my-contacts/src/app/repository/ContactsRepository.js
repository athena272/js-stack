const { v4 } = require('uuid')

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

  create({ name, email, phone, category_id }) {
    return new Promise((resolve, reject) => {
      const newContact = {
        id: v4(),
        name: name,
        email: email,
        phone: phone,
        category_id: category_id
      }

      contacts.push(newContact)
      resolve(newContact)
    })
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