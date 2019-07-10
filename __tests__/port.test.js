const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');


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
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
    dover.addShip(ship);
    expect(dover.ships).toContain(ship);
  });
  it('remove a ship from port', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const titanic = new Ship(itinerary);
    const queenMary = new Ship(itinerary);
    dover.addShip(titanic);
    dover.addShip(queenMary);
    dover.removeShip(titanic);
    expect(dover.ships).toContain(queenMary);
  });
});
