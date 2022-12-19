const cp = require('child_process'); // node原生子进程
const path = require('node:path');
const chokidar = require('chokidar'); // 文件监听工具

let child = null; // 子进程变量

function onChange(paths, stats) {
	child.kill();
	runServer();
}

// 启动配置监听服务
const runWatcher = () => {
	const configPath = path.resolve(__dirname, './config.json');
	// 监听配置文件改动, 需要重跑服务
	chokidar
		.watch(configPath)
		.on('change', onChange)
		.on('error', error => {
			console.error(error);
			process.exit(1);
		});
};

// 启动服务
const runServer = (args) => {
	/*执行子进程方法 1 */
	// cp.exec() // 直接执行命令行,有一定的风险性

	/*执行子进程方法 2*/
	// cp.execFile('node', [path.resolve(__dirname, './childService.js'), '--force'], {}, (err, stdout) => {
	// 	// console.log('stdout', stdout);
	// });
	/*执行子进程方法 3*/
	const scriptPath = path.resolve(__dirname, './childService.js');
	// 执行子进程并传入参数
	child = cp.fork(scriptPath, [JSON.stringify(args)]);
	// 监听子进程退出, 主进程也要退出
	child.on('exit', (code) => {
		if (code) {
			process.exit(code);
			child = null;
		}
	});
};

module.exports = function startServer (args) {
	// 监听文件
	runWatcher();
	// 启动子进程服务
	runServer(args);
};
