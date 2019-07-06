const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Port', () => {
    it('can exist', () => {
        const port = new Port('Dover')
        expect(port).toBeInstanceOf(Object)
    });
    it('has a name', () => {
        const port = new Port('Dover')
        expect(port.name).toBe('Dover')
    });
});
