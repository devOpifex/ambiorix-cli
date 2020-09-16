#!/usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const ncp = require('ncp').ncp;
const utils = require('./src/utils');
 
ncp.limit = 16;

getPkgPath = (proj) => {
  return path.join(__dirname, proj)
}

const run = async () => {

  let pkg = process.argv.slice(2)[0];

  if(pkg === undefined)
    return console.error(
      chalk.red('Missing path to project')
    )

  let path = utils.getFullPath(pkg);
  let source = getPkgPath('templates/project');

  if (utils.directoryExists(path)) {
    console.log(chalk.red('Already exists'));
    process.exit();
  }
  
  ncp(source, path, function (err) {
    if (err) {
      return console.error(
        chalk.red(err)
      );
    }
    console.log(
      chalk.green(pkg), 'successfully created!'
    );
   });
};

run();
