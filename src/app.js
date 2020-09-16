const chalk = require('chalk');
const utils = require('./utils');
const { exec } = require("child_process");

module.exports = {
  start: () => {
    let path = utils.getFullPath('app.R');

    exec('Rscript ' + path, (error, stdout, stderr) => {
      if (error) {
        console.log(chalk.red(error.message));
        return;
      }
      if (stderr) {
          console.log(chalk.red(stderr));
          return;
      }

      return ;
    })

  },
  stop: () => {
    exec('R -e "ambiorix::stop_all()"', (error, stdout, stderr) => {
      if (error) {
        console.log(chalk.red(error.message));
        return;
      }
      if (stderr) {
          console.log(chalk.red(stderr));
          return;
      }

      return ;
    })
  }
}