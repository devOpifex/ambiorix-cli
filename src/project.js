const { underline } = require("chalk");
const { spawn } = require("child_process");

module.exports = {
  createProject: (destination) => {
    spawn('R', ['-e', "ambiorix::create_ambiorix('" + destination + "')"], { stdio: 'inherit' });
  },
  createTemplate: (name, ext) => {
    if(name === undefined){
      console.error("Must pass template name")
      return ;
    }

    if(ext === undefined)
      ext = 'html'

    if(!['html', 'R'].includes(ext)){
      console.error("Must be either 'html' or 'R'")
      return ;
    }

    spawn('R', ['-e', "ambiorix::add_template('" + name + "', '" + ext + "')"], { stdio: 'inherit' });
  }
}
