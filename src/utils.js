const fs = require('fs');
const path = require('path');

module.exports = {

  getFullPath: (filePath) => {
    return path.resolve(path.basename(filePath));
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  }
};
