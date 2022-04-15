const arr = [1,5,6,8,3,9,2,0,7,10,11,21,19];

const cache = [];
for (var i = 0, len = arr.length; i < len; i++) {
	const elem = arr[i];
	const cL = cache.length;
	if (!cL) {
		cache.push(elem);
	} else if (cL === 1 && cache[0] > elem) {
		cache[0] = elem;
	} else if (elem < cache[cL - 1] && elem > cache[cL - 2]) {
		cache[cL - 1] = elem;
	} else if (elem > cache[cL - 1]) {
		cache.push(elem);
	}
}
console.log(i);
console.log(cache);
