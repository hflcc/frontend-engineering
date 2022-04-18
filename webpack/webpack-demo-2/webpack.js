const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse');
const { transformFromAst } = require('@babel/core');
// todo 未实现简易功能
const entryFile = path.resolve(__dirname, './app.js');
const codeStr = fs.readFileSync(entryFile, 'utf-8');

const ast = parser.parse(codeStr, {
	sourceType: 'module'
});

const dependencies = {};
traverse.default(ast, {
	ImportDeclaration({node}){
		dependencies[node.source.value] = path.join(
			path.dirname(entryFile),
			node.source.value
		);
		console.log('dependencies', dependencies);
	}
});

const { code } = transformFromAst(ast,null,{
	presets: ['@babel/preset-env']
});
