const startServer = require('../start/startServer');

class Service {
	constructor(prop) {
		this.args = prop;
		this.hooks = [];
	}
	start() {
		startServer(this.args);
		return this;
	}
	registerHooks(hook) {
		this.hooks.push(hook);
	}
	emitHooks() {

	}
}

module.exports = Service;
