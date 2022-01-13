#!/usr/bin/env node
const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')

const chalk = require('chalk')   // chalk 5 是ESM  chalk 4 是CSM
const log = content => console.log(chalk.green(content))
const {clone} = require('./download')
const {spawn} = require('child_process')

const open = require('open')

const _spawn = async (...args) => {
  return new Promise((resolve)=>{
    const proc = spawn(...args) 
    proc.stdout.pipe(process.stdout)  // 为了打印出日志输出
    proc.stderr.pipe(process.stderr)
    proc.on('close',()=>{     // 知道子进程结束了
      resolve()
    })
  })
}

module.exports = async name => {
  // 打印欢迎界面
  // clear()
  const data = await figlet('Welcome')
  log(data)

  log(`下载项目: ${name}`)
  // await clone('github:cxyxiaoyuyu/xinyi-ui#main',name)

  // 自动安装依赖
  log('安装依赖')
  // await _spawn('npm',['install'],{cwd: `./${name}`})

  log(`安装完成`)

  log('启动')
  
  // 直接写spawn 是在主进程执行 不会打印输出信息 
  // 如果需要打印信息 需要使用自己封装的_spawn  但是这个进程不会结束 所以下面的open 不会执行 所以open 要放在上面
  // spawn('npm',['run','dev'],{cwd: `./${name}`})

  open(`http://localhost:3001`)
  _spawn('npm',['run','dev'],{cwd: `./${name}`})
}