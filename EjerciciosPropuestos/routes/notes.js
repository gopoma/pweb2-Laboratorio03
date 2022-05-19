const express = require("express");
const NoteController = require("../controllers/notes");

function notes(app) {
  const router = express.Router();
  const noteController = new NoteController();
  app.use("/api/notes", router);

  router.get("/", noteController.getAll);
  router.post("/", noteController.storeNote)
}

module.exports = notes;