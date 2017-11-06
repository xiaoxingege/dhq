'use strict'

const assert = require("assert");
const co = require('co');
const thunkify = require('thunkify');
const _request = thunkify(require('request'));
const urlBase = 'http://itougu.jrj.com.cn/act/crud'

const createDoc = function(data) {
  data.__test = true;
  return data;
}

const request = function*(options) {
  options = options || {}
  options.headers = {
    'content-type': 'application/json'
  }
  return JSON.parse((yield _request(options))[1])
}

function getMoble() {
    var prefixArray = ["130", "131", "132", "133", "135", "137", "138", "170", "187", "189"]
    var i = parseInt(10 * Math.random());
    var prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix
}
var day = new Date();
day.setTime(day.getTime());
var s = (day.getMonth() + 1) + '月' + day.getDate() + '日' + day.getHours() + '时' + day.getMinutes() + '分';
var msgArr = ['100元', '200元', '300元', '400元'];

var ss = Math.floor(Math.random() * 10 + 1);
// if(ss === 5){
co(function*() {
    for(var i=0; i<5; i++){
        let result = yield request({
          url: `${urlBase}/11thActivity`,
          method: 'post',
          body: JSON.stringify({
            'userName': '11thActivity',
            'phone': getMoble(),
            'bizsource': '',
            'tgqdcode': '',
            'createDataTime': s,
            'msg': msgArr[parseInt(4 * Math.random())],
            'boolean': false
          })
        });
    }
}).then(function(){
    process.exit(0);
},function(){
    process.exit(0);
});

// }else{
//     process.exit(0);
// }
