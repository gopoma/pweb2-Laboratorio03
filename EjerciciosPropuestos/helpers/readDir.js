const fs = require("fs");

function readDir(dirPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if(err) {
        return reject(err);
      }
      return resolve(files);
    });
  });
}

module.exports = readDir;