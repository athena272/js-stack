const ContactsRepository = require('../repository/ContactsRepository')

class ContactController {
  async index(req, res) {
    // List all registered contacts
    const contacts = await ContactsRepository.findAll()

    res.json(contacts)
  }

  show() {
    // Get one registered contact
  }

  store() {
    // Create a new contact
  }

  update() {
    // Update the contact
  }

  delete() {
    // Delete the contact
  }
}

// Singleton instance
module.exports = new ContactController()