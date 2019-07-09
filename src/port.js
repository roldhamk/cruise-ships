function Port(name) {
  this.name = name;
  this.ships = [];
  this.currentPort.addShip(this);
}

Port.prototype = {
  addShip(ship) {
    this.ships.push(ship);
  },
  removeShip(ship) {
    this.ships.splice(ship, 1);
  },
};

module.exports = Port;
