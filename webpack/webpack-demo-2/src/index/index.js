import './index.less';
// todo 自定义loader有问题
// import value from './diy.hq';
// console.log(value, 'value');
// 使用解构的方式 且 npm包需要符合esmodule规范
import { get } from 'lodash-es';
import { clone } from '@/utils';

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

console.log(get({ a: '1' }, 'a'));

const obj = {
	a: 1,
	b: 2,
	c: function c() {}
};

console.log(clone(obj));
