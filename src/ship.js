/* eslint-disable func-names */

function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = this.itinerary.ports[0];
  this.currentPort.addShip(this);
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
