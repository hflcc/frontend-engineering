#!/usr/bin/env node

// const path = require('path');
// const fs = require('fs');
const { program } = require('commander');

program.command('login <username> [password]')
	.action((username, password) => {
		console.log(username, password);
	});

program.parse();




// console.log(process.cwd());
// const cwd = process.cwd();
// const filecwd = path.resolve(__dirname, '../', cwd);
// const res = fs.readdirSync(filecwd);
// const stat = fs.statSync(res[1]);
// console.log(stat);
// console.log(stat.mode); // 33188 => 1000 000 110 100 100
// console.log(fs.constants.S_IRUSR); // 256 => 1000 000 00
// const canUserRead = stat.mode & fs.constants.S_IRUSR;
