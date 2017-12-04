var fs = require("fs");
var path = require("path");
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");

let source = path.join(__dirname, "Lectures");
let destDir = path.join(__dirname, "build");

function fileList(dir) {
  return fs.readdirSync(dir).reduce(function(list, file) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      return list.concat(fileList(file));
    }
    return list.concat([file]);
  }, []);
}

console.log(fileList(source));
