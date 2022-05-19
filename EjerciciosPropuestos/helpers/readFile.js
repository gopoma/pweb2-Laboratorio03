const fs = require("fs");

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

module.exports = readFile;