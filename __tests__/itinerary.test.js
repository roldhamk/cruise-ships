const Itinerary = require('../src/itinerary');
const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Itinerary', () => {
  it('can be instaniated', () => {
    const itinerary = new Itinerary();
    expect(itinerary).toBeInstanceOf(Object);
  });
  it('can have ports', () => {
    const dover = jest.fn();
    const calais = jest.fn();
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
