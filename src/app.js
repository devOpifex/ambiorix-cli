const utils = require('./utils');
const { spawn } = require("child_process");
const fs = require('fs');

module.exports = {
  start: (port) => {
    let path = utils.getFullPath('app.R');

    if(port === undefined)
      port = "NULL"

    let args = `options(ambiorix.port = ${port});source('${path}')`

    child = spawn('R', ["-e", args], { stdio: 'inherit', detached: true });

    child.unref();

    fs.writeFile('.ambiorix.cli', child.pid.toString(), err => {
      if(err == null)
        return;

      console.error(err);
      child.kill('SIGKILL');
    });
  },
  stop: () => {
    
    fs.readFile('.ambiorix.cli', 'utf8', (err, data) => {
      process.kill(data, 'SIGKILL');
      fs.unlinkSync('.ambiorix.cli');
    });
  }
}
