const fs = require('fs')
// const handlebars = require('handlebars')

const program = require('commander')
program
  .command('create component <name>')
  .description('init project  ')
  .action(refresh)
program.parse(process.argv)

// module.exports = async () => {
async function refresh (name){
  console.log(name)
  // 获取列表
  const list = fs.readdirSync('./src/views')
    .filter(v => v !== 'Home.vue')
    .map(v => ({
      name: v.replace('.vue','').toLowerCase(),
      file: v
    }))
  console.log(list)

  // 生成路由定义
  compile({list},'./src/router/index.js','./template/router.js.hbs')

  // 生成菜单
  compile({list},'./src/App.vue','./template/App.vue.hbs')

  /**
   * 模板编译 
   * @param {*} meta 
   * @param {*} filePath 
   * @param {*} templatePath 
   */ 
  function compile(meta,filePath,templatePath){
    if(fs.existsSync(templatePath)){
      const content = fs.readFileSync(templatePath).toString()
      // const result = handlebars.compile(content)(meta)
      fs.writeFileSync(filePath,content)
      console.log(`${filePath}创建成功`)
    } 
  }
}