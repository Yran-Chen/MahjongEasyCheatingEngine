var express = require('express');
var fs=require("fs");
var app = express();
app.use(express.static("./"));

var server = app.listen(5000, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })