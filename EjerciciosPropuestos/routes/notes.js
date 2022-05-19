const express = require("express");

function notes(app) {
  const router = express.Router();
  app.use("/api/notes", router);

  router.get("/", (request, response) => {
    return response.json({message: "works!"});
  });
}

module.exports = notes;