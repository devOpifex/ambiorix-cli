#!/usr/bin/env node

const utils = require('./src/utils');
const project = require('./src/project');
const app = require('./src/app');

const run = async () => {

  let args = process.argv.slice(2);
  let cmd = args[0];

  if(['create-basic', 'create-bootstrap', 'create-vue'].includes(cmd)){
    let pkg = args[1];

    if(pkg === undefined){
      console.error('Missing path to project');
      return ;
    }

    let path = utils.getFullPath(pkg);

    if (utils.directoryExists(path)) {
      console.error('Already exists');
      process.exit();
    }

    project.createProject(path, cmd);
  } else if(cmd === 'start'){
    app.start();
  } else if(cmd === 'stop') {
    app.stop();
  } else if(cmd === 'template-basic') {
    project.createTemplateBasic(args[1]);
  } else if(cmd === 'template-bootstrap') {
    project.createTemplateBootstrap(args[1]);
  } else if(cmd === 'install-generator') {
    project.installGenerator();
  } else if(cmd === 'install') {
    project.installAmbiorix();
  } else {
    console.error('Command not found, pass: create-basic, create-bootstrap, start, stop, install, or install-generator');
  }
  
  
};

run();
