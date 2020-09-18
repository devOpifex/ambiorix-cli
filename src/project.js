const { spawn } = require("child_process");

module.exports = {
  createProject: (destination) => {
    spawn('R', ['-e', "ambiorix::create_ambiorix('" + destination + "')"], { stdio: 'inherit' });
  }
}
