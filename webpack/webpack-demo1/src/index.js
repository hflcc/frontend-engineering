import './styles/index.less';
// todo 自定义loader有问题
// import value from './diy.hq';
// console.log(value, 'value');

Array.prototype.filter = function (cb) {
	if (cb === undefined) {
		throw new Error('at least one arguments');
	}
	if (Object.prototype.toString.call(cb) !== '[object Function]') {
		throw new Error(`${cb} should be a function`);
	}
	const arr = [];
	this.forEach(item => {
		if (cb(item)) {
			arr.push(item);
		}
	});
	return arr;
};
