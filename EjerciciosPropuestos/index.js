const path = require("path");
const express = require("express");
const bp = require("body-parser");
const MarkdownIt = require("markdown-it");
const PORT = 4000;

const md =  new MarkdownIt();
const app = express();

console.log(md.render("# In my point of view, Excel is a valid database"))

app.listen(PORT, () => {
  console.log("Listening on: http://localhost:"+PORT);
});