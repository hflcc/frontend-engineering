const arr = [1, 5, 6, 8, 3, 9, 2, 0, 7, 10, 11, 21, 19];

const a = '333';
const b = 3;

const cache = [];
for (let i = 0, len = arr.length; i < len; i++) {
	const elem = arr[i];
	const cL = cache.length;
	if (!cL) {
		cache.push({ v: elem, i });
	} else if (cL === 1 && cache[0].v > elem) {
		cache[0] = { v: elem, i };
	} else if (elem < cache[cL - 1].v && elem > cache[cL - 2].v) {
		cache[cL - 1] = { v: elem, i };
	} else if (elem > cache[cL - 1].v) {
		cache.push({ v: elem, i });
	}
}
console.log(cache);
