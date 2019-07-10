const Itinerary = require('../src/itinerary');
const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Itinerary', () => {
  it('can be instaniated', () => {
    const itinerary = new Itinerary();
    expect(itinerary).toBeInstanceOf(Object);
  });
  it('can have ports', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
  })
});
