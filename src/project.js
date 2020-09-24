const { underline } = require("chalk");
const { spawn } = require("child_process");

module.exports = {
  createProject: (destination, type) => {
    
    if(type === undefined){
      console.error('Missing last argument type: basic, bootstrap');
      return ;
    }

    if(type == 'create-basic'){
      spawn('R', ['-e', "ambiorix.generator::create_basic('" + destination + "')"], { stdio: 'inherit' });
    } else if (type == 'create-bootstrap'){
      spawn('R', ['-e', "ambiorix.generator::create_bootstrap('" + destination + "')"], { stdio: 'inherit' });
    }
  },
  createTemplateBasic: (name) => {
    if(name === undefined){
      console.error("Must pass template name");
      return ;
    }

    spawn('R', ['-e', "ambiorix.generator::add_template_basic('" + name + "')"], { stdio: 'inherit' });
  },
  createTemplateBootstrap : (name) => {
    if(name === undefined){
      console.error("Must pass template name");
      return ;
    }

    spawn('R', ['-e', "ambiorix.generator::add_template_bootstrap('" + name + "')"], { stdio: 'inherit' });
  },
  installAmbiorix: () => {
    spawn('R', ['-e', "remotes::install_github('JohnCoene/ambiorix')"], { stdio: 'inherit' });
  },
  installGenerator: () => {
    spawn('R', ['-e', "remotes::install_github('JohnCoene/ambiorix.generator')"], { stdio: 'inherit' });
  }
}
