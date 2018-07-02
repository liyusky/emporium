const fs = require('fs');
const path = require('path');
const flexSass = './dependencies/sass/_flex.scss'
const unitSass = './dependencies/sass/_unit.scss'

const FileType = ['vue', 'scss', 'js'];
const exDir = ['common', 'components'];

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

    console.log(name)
    if (!exDir.includes(name)) {
      FileType.forEach(type => {
        let file = name + '.' + type;
        let goal = path.join(dir, file)
        let content = Template[type]
        if (!files.includes(file)) {
          if (type == 'scss') {
            scssSrc = `@import '${path.relative(goal, flexSass).replace(/\\/g, '/').replace('../', '')}';\n`
            console.log(scssSrc)
            scssSrc += `@import '${path.relative(goal, unitSass).replace(/\\/g, '/').replace('../', '')}';\n`
            console.log(scssSrc)
            content = scssSrc + content
            scssSrc = ''
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
