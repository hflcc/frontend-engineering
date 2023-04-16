exports.default = function (content) {
	console.log('loader1');
	const { resourcePath, resourceQuery } = this;
	// vue-loader 循环解析原理
	content = `import '${resourcePath}?vue&type=template&id=123456'`;
	return content;
};

exports.pitch = function (a, b, data) {
	console.log('loader pitch');
	data.value = 'hello world';
};
