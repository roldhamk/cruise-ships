/* eslint-disable func-names */
function Ship(currentPort) {
  this.currentPort = currentPort;
}

Ship.prototype = {
  setSail() {
    this.currentPort = null;
  },

  dock(port) {
    this.currentPort = port;
  },

};

module.exports = Ship;
