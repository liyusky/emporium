const fs = require('fs');
const path = require('path');

function clear (dir) {
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

    files.forEach(item => {
      let currentDir = path.join(dir, item);
      fs.stat(currentDir, (err, stats) => {
        if (stats.isDirectory()) {
          return clear(currentDir);
        }
        else if (path.extname(item) == '.css') {
          fs.unlink(currentDir, function (err) {
            if (err) return console.log(err);
              console.log('文件删除成功');
          })
        }
      });
    });
  }).catch((err) => {
    console.log(err);
  });
}

clear('./src/components');
