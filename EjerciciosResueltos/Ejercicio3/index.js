// En el lado del Servidor
const fs = require("fs");
const path = require("path");
const express = require("express");
const bp = require("body-parser");
const MarkdownIt = require("markdown-it");
const PORT = 4000;

const md = new MarkdownIt();
const app = express();

app.use(express.static(path.resolve(__dirname, "pub")));

app.use(bp.json());

app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "index.html"));
});
app.post("/", (request, response) => {
  console.log(request.body);
  const markDownText = request.body.text;
  console.log(markDownText);
  const htmlText = md.render(markDownText);
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify({
    text: htmlText
  }));
});

app.listen(PORT, () => {
  console.log("Listening on: http://localhost:"+PORT);
});