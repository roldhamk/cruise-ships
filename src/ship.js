function Ship(currentPort) {
    this.currentPort = currentPort
};

Ship.prototype = {
    setSail: function() {
        this.currentPort = undefined
    },

    dock(port) {
        this.currentPort = port;
    }

};

module.exports = Ship;