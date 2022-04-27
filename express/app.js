const express = require('express');
const path = require('path');
const port = 8899;
const app = express();

const dir = path.join(__dirname, './static');
const dir1 = path.resolve(__dirname, './static');

// 做静态资源服务器,放在资源服务器的内存上 同构部署
app.use('/static', express.static(dir));

app.listen(port, function () {
	console.log('server is running at ', port, ' port');
});
