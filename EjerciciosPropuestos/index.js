const fs = require("fs");
const path = require("path");
const express = require("express");
const bp = require("body-parser");
const MarkdownIt = require("markdown-it");
const views = require("./helpers/views");
const PORT = 4000;

const notes = require("./routes/notes");

const md =  new MarkdownIt();
const app = express();

app.use(bp.json());

notes(app);
app.get("/", (request, response) => {
  return views("index.html", response);
});

app.listen(PORT, () => {
  console.log("Listening on: http://localhost:"+PORT);
});