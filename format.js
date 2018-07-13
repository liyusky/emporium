const fs = require('fs');
const citys = require('./city');
var json = {}
var json1 = []
var json2 = {}
var json3 = {}
for (const key in citys) {
  json[key] = {}
  json1.push(key)
  json2[key] = {}
  json3[key] = {}
}
fs.writeFile('./citys1.js', JSON.stringify(json1), (err) => {});

for (const key in json) {
  if (citys.hasOwnProperty(key)) {
    for (const kez in citys[key]) {
      if (kez === '市辖区' || kez === '省直辖县级行政区划' || kez === '县' || kez === '自治区直辖县级行政区划') {
        citys[key][kez].forEach(item => {
          json[key][item] = null
          json2[key][item] = null
          json3[key][item] = null
        });
      } else {
        json3[key][kez] = citys[key][kez]
      }
    }
  }
}

fs.writeFile('./citys2.js', JSON.stringify(json2), (err) => {
});

fs.writeFile('./citys3.js', JSON.stringify(json3), (err) => {});