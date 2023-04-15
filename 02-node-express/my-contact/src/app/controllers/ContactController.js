class ContactController {
  index(req, res) {
    // List all registered contacts
    res.send('🔥 Welcome to my API 🔥')
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