const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
  it('can be created', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary); 
    expect(ship).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(dover);
  });
  it('can set sail from a port', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it('can dock at a port', () => {
    const dover = new Port('Dover');    
    const calais = new Port('Calais');
    const itinerary =  new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
  it('gets added to port on instantiation', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
    expect(dover.ships).toContain(ship);
  });
});
