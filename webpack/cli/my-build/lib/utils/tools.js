const transProcessArgvToObject = (params = []) => {
	return params.reduce((total, item) => {
		const paramArr = item.split('=');
		const key = paramArr[0].replace('--', '');
		const value = paramArr[1] || undefined;
		total[key] = value;
		return total;
	}, {});
};

exports.transProcessArgvToObject = transProcessArgvToObject;
