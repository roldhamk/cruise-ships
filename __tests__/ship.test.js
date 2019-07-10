const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let dover;
    let itinerary;
    let ship;
    let calais;
    beforeEach(() => {
      dover = new Port('Dover');
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
      calais = new Port('Calais');
    });
    it('can be created', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
      expect(ship.currentPort).toBe(dover);
    });
    it('can set sail from a port', () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(dover);
    });
    it('can\'t sail further than its itinerary', () => {
      ship.setSail();
      ship.dock();
      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
    it('gets added to port on instantiation', () => {
      expect(dover.ships).toContain(ship);
    });
  });
});
it('can dock at a port', () => {
  const dover = new Port('Dover');    
  const calais = new Port('Calais');
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);
  ship.dock(calais);
  expect(ship.currentPort).toBe(dover, calais);
});
