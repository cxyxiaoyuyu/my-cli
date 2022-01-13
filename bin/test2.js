#!/usr/bin/env node
const program = require('commander')
// 以package.json 的version 作为test2 的version
program.version(require('../package.json').version)
// program
//   .command('init <name>')
//   .description('init project  ')
//   .action(require('../lib/init'))

program
  .command('refresh')
  .description('init project  ')
  .action(require('../lib/refresh'))

// 解析主进程参数
program.parse(process.argv)