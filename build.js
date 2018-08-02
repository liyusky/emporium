const fs = require('fs');
const path = require('path');
const flexSass = './dependencies/sass/_flex.scss'
const unitSass = './dependencies/sass/_unit.scss'
const btnSass = './dependencies/sass/_btn.scss'

const FileType = ['vue', 'scss', 'js'];
const exDir = ['common', 'components', 'modal'];

const Template = {
  vue: fs.readFileSync('./dependencies/tempalte/tempalte.vue', 'utf8'),
  scss: fs.readFileSync('./dependencies/tempalte/tempalte.scss', 'utf8'),
  js: fs.readFileSync('./dependencies/tempalte/tempalte.js', 'utf8')
};

function build (dir) {
  new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          dir: dir,
          files: files
        });
      }
    });
  }).then((result) => {
    let dir = result.dir;
    let name = path.basename(dir);
    let files = result.files;

    if (!exDir.includes(name)) {
      FileType.forEach(type => {
        let file = name + '.' + type;
        let goal = path.join(dir, file)
        let content = Template[type]
        if (!files.includes(file)) {
          if (type == 'scss') {
            scssSrc = `@import '${path.relative(goal, flexSass).replace(/\\/g, '/').replace('../', '')}';\n`
            scssSrc += `@import '${path.relative(goal, unitSass).replace(/\\/g, '/').replace('../', '')}';\n`
            scssSrc += `@import '${path.relative(goal, btnSass).replace(/\\/g, '/').replace('../', '')}';\n`
            content = scssSrc + content
            scssSrc = ''
          }
          else if (type == 'vue') {
            let nameArr = name.split('-')
            nameArr.forEach((value, index) => {
              nameArr[index] = value.substring(0, 1).toUpperCase() + value.substring(1)
            })
            content = content.replace('SITE_MODULE_NAME', nameArr.join(''))
            content = content.replace('SITE_SASS_NAME', `./${name}.scss`)
          }
          fs.writeFile(goal, content, (err) => {
            if (err) throw err;
            console.log(goal + '创建成功');
          });
        }
      });
    }

    files.forEach(item => {
      let currentDir = path.join(dir, item);
      fs.stat(currentDir, (err, stats) => {
        if (stats.isDirectory()) {
          return build(currentDir);
        }
      });
    });
  }).catch((err) => {
    console.log(err);
  });
}

build('./src/components');

function resolve(path) {
  let arr = path.split('/')
}
