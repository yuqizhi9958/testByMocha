var addMyLog = require("./logPath.js");
var expect = require('chai').expect;

describe('是否存在日志文件路径', function() {
  it('日志文件路径存在', function() {
    var logpath = '/MY_LOG/PATH';
    var mylogpath = '/MY_LOG/PATH';
    expect(addMyLog(logpath,mylogpath )).to.be.equal(true);
  });
  it('日志文件路径不存在', function() {
    var logpath = '/';
    var mylogpath = '/MY_LOG/PATH';
    expect(addMyLog(logpath,mylogpath )).to.be.equal(true);
  });
});

//mocha logpath.test.js
