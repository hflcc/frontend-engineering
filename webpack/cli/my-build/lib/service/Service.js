const startServer = require('../start/startServer');

class Service {
	constructor(prop) {
		this.args = prop;
	}
	start() {
		startServer(this.args);
		return this;
	}
}

module.exports = Service;
