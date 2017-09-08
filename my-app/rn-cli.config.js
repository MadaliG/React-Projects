const path = require('path');

module.exports = {
  getProjectRoots() {
    return [path.join(__dirname, '..', 'my-app'), __dirname];
  }
};