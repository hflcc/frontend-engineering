#! /usr/bin/env node

const { program } = require('commander');
const pkg = require('../package.json');
const checkNode = require('../lib/utils/checkNode');
const { transProcessArgvToObject } = require('../lib/utils/tools')
const detectPort = require('detect-port')
const inquirer = require('inquirer')
const Service = require('../lib/service/Service')

const MIN_NODE_VERSION = '16.9.0';
const DEFAULT_PORT = '8080';

(async function () {
  try {
    if(!checkNode(MIN_NODE_VERSION)) {
      throw new Error('Please upgrade your node version to v' + MIN_NODE_VERSION)
    }
    program.command('start')
      .version(pkg.version)
      .description('start my-build desc') // 添加描述
      .allowUnknownOption(true) // 允许未知参数

    program.parse(process.argv)

    const paramsObj = transProcessArgvToObject(process.argv.slice(2))
    const defaultPort = parseInt(paramsObj['port'] || DEFAULT_PORT, 10);

    try {
      const newPort = await detectPort(defaultPort)
      if (newPort === defaultPort) {
        console.log('端口可以使用: ' + newPort)
      } else {
        const questions = {
          type: 'confirm', // list checkbox confirm input password
          name: 'answer',
          message: defaultPort + '端口被占用,建议使用新端口: ' + newPort,
          // choices: ['a', 'b', 'c']
        }
        const { answer } = await inquirer.prompt(questions) // true false
        if (!answer) {
          process.exit()
          return
        }
      }
      const args = {
        port: newPort
      }
      process.env.NODE_ENV = 'development';
      // 启动服务
      const service = new Service(args)
      service.start()
    } catch (err) {
     console.log(err)
    }
  } catch (err) {
    console.log(err.message)
  }
})()
