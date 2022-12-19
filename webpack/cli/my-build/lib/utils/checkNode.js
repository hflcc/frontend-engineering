const semver = require('semver'); // 版本获取工具

module.exports = function checkNode(minNodeVersion) {
	const nodeVersion = process.version;
	return semver.satisfies(nodeVersion, `>=${minNodeVersion}`);
};
