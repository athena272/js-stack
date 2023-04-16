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

  delete(id) {
    return new Promise((resolve, reject) => {
      resolve(
        contacts = contacts.filter(contact => contact.id !== id)
      )
    })
  }
}

module.exports = new ContactsRepository()