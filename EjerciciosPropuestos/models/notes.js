const path = require("path");
const readDir = require("../helpers/readDir");
const readFile = require("../helpers/readFile");

class Note {
  constructor(note) {
    this.name = note.name;
    this.content = note.content;
  }

  validate() {
    const validation = {success:true, errors:[]};
    
    if(!this.name || !this.content) {
      validation.success = false;
      validation.errors.push(["Fill all the fields!"]);
    }

    return validation;
  }

  static async getAll() {
    const fileNames = await readDir(path.resolve(__dirname, "..", "markdown"))
    const files = await Promise.all(
      fileNames.map(async function (fileName) {
        const fileContent = await readFile(path.resolve(__dirname, "..", "markdown", fileName));
        return {
          name: fileName,
          content: fileContent
        };
      })
    );

    return files;
  }
}

module.exports = Note;