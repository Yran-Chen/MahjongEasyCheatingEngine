var express = require('express');
var app = express();
 
app.use('/public', express.static('public'));

console.log(__dirname + "/public" + "/index.html")
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/public" + "/index.html" );
})
 
// app.get('/process_get', function (req, res) {
 
//    // 输出 JSON 格式
//    var response = {
//        "first_name":req.query.first_name,
//        "last_name":req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })
 
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Address: localhost:%s", port)
 
})