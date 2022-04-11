import path from 'path';
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reg = /<script>([\s\S]+?)<\/script>/

function hqLoader (source) {
	const file = path.resolve(__dirname, source.resource)
	const res = fs.readFileSync(file)
	const _source = res.toString().match(reg)
	return _source && _source[1] ? _source[1] : source;
}

export default hqLoader;
