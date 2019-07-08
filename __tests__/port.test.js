const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Port', () => {
  it('can be instaniated', () => {
    const port = new Port('Dover');
    expect(port).toBeInstanceOf(Object);
  });
  it('has a name', () => {
    const port = new Port('Dover');
    expect(port.name).toBe('Dover');
  });
  it('add ship to port', () => {
    const dover = new Port('Dover');
    const ship = new Ship('queenMary');
    dover.addShip(ship);
    expect(dover.ships).toContain(ship);
  });
  it('remove a ship from port', () => {
    const port = new Port('Dover');
    const titanic = new Ship('Titanic');
    const queenMary = new Ship('queenMary');
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(titanic);
    expect(port.ships).toEqual([queenMary]);
  });
});
