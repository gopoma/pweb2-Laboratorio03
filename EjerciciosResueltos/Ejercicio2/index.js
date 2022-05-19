// En el lado del Servidor
const fs = require("fs");
const path = require("path");
const express = require("express");
const PORT = 4000;

const app = express();

app.use(express.static("pub"));

app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/recitar", (request, response) => {
  fs.readFile(path.resolve(__dirname, "priv", "poema.txt"), "utf8", (err, data) => {
    if(err) {
      console.log(err);
      response.status(500).json({
        error: "Some random message"
      });
      return
    }
    response.json({
      text: data.replace(/\n/g, "<br>")
    });
  });
});

app.listen(PORT, () => {
  console.log("Listening on: http://localhost:"+PORT);
});