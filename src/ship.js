/* eslint-disable func-names */

function Ship(itinerary) {
  this.currentPort = itinerary[0];
  this.itinerary = itinerary;
  this.itinerary[0].ships.push(this);
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
