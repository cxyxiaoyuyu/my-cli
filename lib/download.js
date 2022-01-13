const { promisify } = require('util')
const ora = require('ora')

module.exports.clone = async function(repo,desc){
  const download = promisify(require('download-git-repo'))
  const process = ora(`下载..... ${repo}`)
  process.start()
  await download(repo,desc)
  console.log(repo,desc)
  process.succeed()
}