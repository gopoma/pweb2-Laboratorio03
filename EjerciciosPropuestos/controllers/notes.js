const Note = require("../models/notes");

class NoteController {
  async getAll(request, response) {
    const files = await Note.getAll();
    return response.json(files);
  }

  async storeNote(request, response) {
    const newNote = new Note(request.body);
    const validation = newNote.validate();

    if(!validation.success) {
      return response.status(400).json(validation);
    }

    return response.json(request.body);
  }
}

module.exports = NoteController;