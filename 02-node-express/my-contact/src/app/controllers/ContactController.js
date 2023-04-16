const ContactsRepository = require('../repository/ContactsRepository')

class ContactController {
  async index(req, res) {
    // List all registered contacts
    const contacts = await ContactsRepository.findAll()

    res.json(contacts)
  }

  async show(req, res) {
    // Get one registered contact
    const { id } = req.params
    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      // Not found
      return res.status(400).json({ errorMessage: 'Contact not found' })

    }
    res.json(contact)
    // res.send(req.params)
  }

  store() {
    // Create a new contact
  }

  update() {
    // Update the contact
  }

  async delete(req, res) {
    // Delete the contact
    const { id } = req.params
    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      // Not found
      return res.status(400).json({ errorMessage: 'Contact not found' })

    }

    await ContactsRepository.delete(id)
    // Sucessfully without body
    res.sendStatus(204)
  }
}

// Singleton instance
module.exports = new ContactController()