import path from 'path';
import fs from 'fs';
import { __dirname } from '../root-dirname.js';

const reg = /<script>([\s\S]+?)<\/script>/;

function hqLoader (source) {
	const file = path.resolve(__dirname, source.resource);
	const res = fs.readFileSync(file);
	const _source = res.toString().match(reg);
	return _source && _source[1] ? _source[1] : source;
}

export default hqLoader;
