const chalk = require('chalk');
const ncp = require('ncp').ncp;

ncp.limit = 16;

module.exports = {
  createProject: (source, destination, pkg) => {
    ncp(source, destination, function (err) {
      if (err) {
        return console.error(
          chalk.red(err)
        );
      }
      console.log(
        chalk.green(pkg), 'successfully created!'
      );
    });
  }
}
