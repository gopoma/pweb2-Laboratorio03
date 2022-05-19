const path = require("path");

function views(htmlFileName, response) {
  return response.sendFile(path.resolve(__dirname, "..", "views", htmlFileName));
}

module.exports = views;