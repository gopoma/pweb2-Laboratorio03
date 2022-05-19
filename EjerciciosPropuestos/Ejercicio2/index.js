const path = require("path");
const express = require("express");
const PORT = 4000;

const app = express();

app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "pweb2.html"));
});

app.listen(PORT, () => {
  console.log("Listening on: http://localhost:"+PORT);
});