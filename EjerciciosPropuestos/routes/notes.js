const path = require("path");
const express = require("express");
const readDir = require("../helpers/readDir");
const readFile = require("../helpers/readFile");

function notes(app) {
  const router = express.Router();
  app.use("/api/notes", router);

  router.get("/", async (request, response) => {
    const { name } = request.query;
    const fileNames = await readDir(path.resolve(__dirname, "..", "markdown"));
    const relatedFiles = fileNames.filter(function(fileName) {
      const regExp = new RegExp(`.*${name}.*`, "g");
      return fileName.match(regExp);
    });
    return response.json(relatedFiles);
  });

  router.get("/", async (request, response) => {
    const fileNames = await readDir(path.resolve(__dirname, "..", "markdown"));
    const files = await Promise.all(
      fileNames.map(async function (fileName) {
        const fileContent = await readFile(path.resolve(__dirname, "..", "markdown", fileName));
        return {
          name: fileName,
          content: fileContent
        };
      })
    );
    return response.json(files);
  });
}

module.exports = notes;