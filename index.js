#!/usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const utils = require('./src/utils');
const project = require('./src/project');
const app = require('./src/app');

getPkgPath = (proj) => {
  return path.join(__dirname, proj)
}

const run = async () => {

  let args = process.argv.slice(2);
  let cmd = args[0];

  if(cmd === 'create'){
    let pkg = args[1];

    if(pkg === undefined){
      console.error(
        chalk.red('Missing path to project')
      )
      return ;
    }

    let path = utils.getFullPath(pkg);
    let source = getPkgPath('templates/project');

    if (utils.directoryExists(path)) {
      console.log(chalk.red('Already exists'));
      process.exit();
    }

    project.createProject(source, path, pkg);
  } else if(cmd === 'start'){
    app.start();
  } else if(cmd === 'stop') {
    app.stop();
  } else {
    console.error(chalk.red('Command not found, pass: create, start, or stop'))
  }
  
  
};

run();
