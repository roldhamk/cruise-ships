const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Ship', () => {
  it('can be created', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });
  it('can set sail from a port', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it('can dock at a port', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover);
    const calais = new Port('Calais');
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});
