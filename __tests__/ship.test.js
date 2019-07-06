const Ship = require('../src/ship');

describe('Ship', () => {
    it('can be created', () => {
        expect(new Ship).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const ship = new Ship('Calais');
        expect(ship.startingPort).toBe('Calais');
    });
});