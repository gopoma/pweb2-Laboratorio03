const fs = require("fs");
const path = require("path");
const express = require("express");
const bp = require("body-parser");
const MarkdownIt = require("markdown-it");
const PORT = 4000;

const notes = require("./routes/notes");

const md =  new MarkdownIt();
const app = express();

notes(app);
app.get("/", (request, response) => {
  return response.sendFile(path.resolve(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log("Listening on: http://localhost:"+PORT);
});