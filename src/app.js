const utils = require('./utils');
const { spawn } = require("child_process");

module.exports = {
  start: () => {
    let path = utils.getFullPath('app.R');

    spawn('Rscript', [path], { stdio: 'inherit' });

  },
  stop: () => {

    spawn('R', ['-e', "ambiorix::stop_all()"], { stdio: 'inherit' });

  }
}