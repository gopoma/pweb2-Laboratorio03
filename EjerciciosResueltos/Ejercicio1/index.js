const path = require("path");
const express = require("express");
const PORT = 4000;

const app = express();

app.use(express.static(path.resolve(__dirname, "pub")));

app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("Listening on: http://localhost:"+PORT);
});